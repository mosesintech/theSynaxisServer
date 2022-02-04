import db from './dbConfig';

type Params = { [k: string]: string | number };

export function findAll(table: string) {
  return db(table)
    .then()
    .catch((err) => {
      throw new Error(`Error retreiving items: ${err}`);
    });
}

export async function findOne(table: string, id: number) {
  const item = await db(table)
    .where({ id })
    .first()
    .then()
    .catch((err) => {
      throw new Error(`Error retreiving item: ${err}`);
    });
  if (!item) {
    throw Error('Item does not exist');
  }
  return item;
}

export async function addOne(table: string, newItem: Params) {
  const [{ id }] = await db(table)
    .insert(newItem, 'id')
    .then()
    .catch((err) => {
      throw new Error(`Error adding item: ${err}`);
    });
  return findOne(table, id);
}

export async function updateOne(
  table: string,
  updatedItem: Params
): Promise<Params> {
  const { id } = updatedItem;
  await db(table)
    .update(updatedItem)
    .update('modified_at', db.fn.now())
    .where({ id })
    .then()
    .catch((err) => {
      throw new Error(`Error updating item: ${err}`);
    });
  return findOne(table, Number(id));
}

export async function deleteOne(table: string, id: number): Promise<Params> {
  const item = await findOne(table, id);
  if (item.is_deleted) {
    throw new Error(`Item already deleted`);
  }
  await db(table)
    .update('is_deleted', true)
    .update('modified_at', db.fn.now())
    .where({ id });
  return findOne(table, id);
}

export async function restoreOne(table: string, id: number): Promise<Params> {
  const item = await findOne(table, id);
  if (!item.is_deleted) {
    throw new Error(`Item not deleted`);
  }
  await db(table)
    .update('is_deleted', false)
    .update('modified_at', db.fn.now())
    .where({ id });
  return findOne(table, id);
}
