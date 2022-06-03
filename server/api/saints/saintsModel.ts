import {
  findOne,
  findAll,
  addOne,
  updateOne,
  deleteOne,
  restoreOne,
} from '../../data/dataModel';
import {
  DbToGQLTransformSaintData,
  GQLToDbTransformSaintData,
} from './saintsFunctions';

type Saint = { [key: string]: undefined | number | string | boolean };

interface SaintInput extends Saint {
  id?: number;
  name?: string;
  life?: string;
  born?: string;
  died?: string;
  feast_month?: string;
  feast_date?: string;
  is_bc?: boolean;
  is_martyr?: boolean;
  is_confessor?: boolean;
  is_Patriarch?: boolean;
  is_bishop?: boolean;
  is_priest?: boolean;
  is_deacon?: boolean;
  is_monk?: boolean;
  is_married?: boolean;
  is_male?: boolean;
}

interface SaintOutput extends Saint {
  id?: number;
  name?: string;
  life?: string;
  born?: string;
  died?: string;
  feastMonth?: string;
  feastDate?: string;
  isBc?: boolean;
  isMartyr?: boolean;
  isConfessor?: boolean;
  isPatriarch?: boolean;
  isBishop?: boolean;
  isPriest?: boolean;
  isDeacon?: boolean;
  isMonk?: boolean;
  isMarried?: boolean;
  isMale?: boolean;
  createdAt?: string;
  modifiedAt?: string;
  isDeleted?: boolean;
}

export async function getSaints() {
  const saints = await findAll('saints');
  const transformedSaints = saints.map((saint: SaintInput) => {
    const transformedSaint = DbToGQLTransformSaintData(saint);
    return transformedSaint;
  });
  return transformedSaints;
}

export async function getSaint(id: number): Promise<SaintOutput> {
  let saint = {};
  try {
    saint = await findOne('saints', id);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(`Saint does not exist`);
  }
  const transformedSaint = DbToGQLTransformSaintData(saint);
  return transformedSaint;
}

export async function addSaint(saint: SaintInput): Promise<SaintOutput> {
  const dbSaint = GQLToDbTransformSaintData(saint);
  const addedSaint = await addOne('saints', dbSaint);
  const gqlSaint = DbToGQLTransformSaintData(addedSaint);
  return gqlSaint;
}

export async function updateSaint(saint: SaintInput): Promise<SaintOutput> {
  const dbSaint = GQLToDbTransformSaintData(saint);
  const updatedSaint = await updateOne('saints', dbSaint);
  const gqlSaint = DbToGQLTransformSaintData(updatedSaint);
  return gqlSaint;
}

export async function deleteSaint(id: number): Promise<SaintOutput> {
  let deletedSaint = {};
  try {
    deletedSaint = await deleteOne('saints', id);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const doesNotExist = 'Item does not exist';
    throw new Error(
      `Saint ${
        error.message === doesNotExist ? 'does not exist' : 'already deleted'
      }`
    );
  }
  const transformedSaint = DbToGQLTransformSaintData(deletedSaint);
  return transformedSaint;
}

export async function restoreSaint(id: number): Promise<SaintOutput> {
  let restoredSaint = {};
  try {
    restoredSaint = await restoreOne('saints', id);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const doesNotExist = 'Item does not exist';
    throw new Error(
      `Saint ${
        error.message === doesNotExist ? 'does not exist' : 'already deleted'
      }`
    );
  }
  const transformedSaint = DbToGQLTransformSaintData(restoredSaint);
  return transformedSaint;
}
