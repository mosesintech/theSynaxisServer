import knex from '../../data/dbConfig';
import {
  findAll,
  findOne,
  addOne,
  updateOne,
  deleteOne,
  restoreOne,
} from '../../data/dataModel';

describe('Data Access Functions', () => {
  beforeAll(async () => {
    await knex.migrate.rollback();
    await knex.migrate.latest();
    await knex.seed.run();
  });

  describe('Retrieve Data', () => {
    describe('findAll function', () => {
      test('findAll success', async () => {
        const result = await findAll('saints');
        expect(result.length).toEqual(1);
      });

      test('findAll failure: Database Does Not Exist', async () => {
        await expect(() => findAll('cucumbers')).rejects.toThrow(
          'Error retreiving items: error: select * from "cucumbers" - relation "cucumbers" does not exist'
        );
      });
    });

    describe('findOne function', () => {
      test('findOne: success', async () => {
        const id = 1;
        const result = await findOne('saints', id);
        expect(result.name).toEqual('Nicholas of Myra');
      });

      test('findOne failure: ID does not exist', async () => {
        const id = 10;
        await expect(() => findOne('saints', id)).rejects.toThrow(
          'Item does not exist'
        );
      });

      test('findAll failure: Database Does Not Exist', async () => {
        const id = 1;
        await expect(() => findOne('cucumbers', id)).rejects.toThrow(
          'Error retreiving item: error: select * from "cucumbers" where "id" = $1 limit $2 - relation "cucumbers" does not exist'
        );
      });
    });
  });

  describe('Add Data', () => {
    test('addOne: success', async () => {
      const saint = {
        name: 'Kosmas Aitolos',
        life: 'life',
        born: '1714',
        died: '1779',
        feast_month: 8,
        feast_date: 24,
      };
      const result = await addOne('saints', saint);
      expect(result.name).toEqual('Kosmas Aitolos');
    });

    test('addOne failure: Database Does Not Exist', async () => {
      const saint = {
        name: 'Kosmas Aitolos',
        life: 'life',
        born: '1714',
        died: '1779',
        feast_month: 8,
        feast_date: 24,
      };
      await expect(() => addOne('cucumbers', saint)).rejects.toThrow(
        'Error adding item: error: insert into "cucumbers" ("born", "died", "feast_date", "feast_month", "life", "name") values ($1, $2, $3, $4, $5, $6) returning "id" - relation "cucumbers" does not exist'
      );
    });
  });

  describe('Update Data', () => {
    test('updateOne: success', async () => {
      const saint = {
        id: 2,
        name: 'Kosmas the Aitolian',
      };
      const result = await updateOne('saints', saint);
      expect(result.name).toEqual('Kosmas the Aitolian');
      expect(result.created_at).not.toEqual(result.modified_at);
    });

    test('updateOne failure: ID Does Not Exist', async () => {
      const saint = {
        id: 200,
        name: 'Kosmas Aitolos',
      };
      await expect(() => updateOne('saints', saint)).rejects.toThrow(
        'Item does not exist'
      );
    });

    test('updateOne failure: Database Does Not Exist', async () => {
      const saint = {
        id: 2,
        name: 'Kosmas Aitolos',
      };
      await expect(() => updateOne('cucumbers', saint)).rejects.toThrow(
        'Error updating item: error: update "cucumbers" set "id" = $1, "name" = $2, "modified_at" = CURRENT_TIMESTAMP where "id" = $3 - relation "cucumbers" does not exist'
      );
    });
  });

  describe('Delete Data', () => {
    describe('Soft Delete', () => {
      test('deleteOne: success', async () => {
        const id = 1;
        const result = await deleteOne('saints', id);
        expect(result.is_deleted).toEqual(true);
        expect(result.created_at).not.toEqual(result.modified_at);
      });

      describe('deleteOne: failures', () => {
        test('deleteOne failure: ID does not exist', async () => {
          const id = 10;
          await expect(() => deleteOne('saints', id)).rejects.toThrow(
            'Item does not exist'
          );
        });

        test('deleteOne failure: Database Does Not Exist', async () => {
          const id = 2;
          await expect(() => deleteOne('cucumbers', id)).rejects.toThrow(
            'Error retreiving item: error: select * from "cucumbers" where "id" = $1 limit $2 - relation "cucumbers" does not exist'
          );
        });

        test('deleteOne failure: Item is already deleted', async () => {
          const id = 1;
          await expect(() => deleteOne('saints', id)).rejects.toThrow(
            'Item already deleted'
          );
        });
      });
    });

    describe('Soft Restore', () => {
      test('restoreOne: success', async () => {
        const id = 1;
        const result = await restoreOne('saints', id);
        expect(result.is_deleted).toEqual(false);
        expect(result.created_at).not.toEqual(result.modified_at);
      });

      describe('restoreOne: failures', () => {
        test('restoreOne failure: ID does not exist', async () => {
          const id = 10;
          await expect(() => restoreOne('saints', id)).rejects.toThrow(
            'Item does not exist'
          );
        });

        test('restoreOne failure: Database Does Not Exist', async () => {
          const id = 1;
          await expect(() => restoreOne('cucumbers', id)).rejects.toThrow(
            'Error retreiving item: error: select * from "cucumbers" where "id" = $1 limit $2 - relation "cucumbers" does not exist'
          );
        });

        test('restoreOne failure: Item is not deleted', async () => {
          const id = 1;
          await expect(() => restoreOne('saints', id)).rejects.toThrow(
            'Item not deleted'
          );
        });
      });
    });
  });

  afterAll(async () => {
    await knex.migrate.rollback();
    await knex.destroy();
  });
});
