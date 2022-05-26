import {
  findOne,
  findAll,
  addOne,
  updateOne,
  deleteOne,
  restoreOne,
} from '../../data/dataModel';

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
  is_patriarch?: boolean;
  is_bishop?: boolean;
  is_priest?: boolean;
  is_deacon?: boolean;
  is_monk?: boolean;
  is_male?: boolean;
}

interface SaintOutPut extends SaintInput {
  created_at?: string;
  modified_at?: string;
  is_deleted?: boolean;
}

export function getSaints() {
  return findAll('saints');
}

export function getSaint(id: number): Promise<SaintOutPut> {
  return findOne('saints', id);
}

export function addSaint(saint: SaintInput): Promise<SaintOutPut> {
  return addOne('saints', saint);
}

export function updateSaint(saint: SaintInput): Promise<SaintOutPut> {
  return updateOne('saints', saint);
}

export async function deleteSaint(id: number): Promise<SaintOutPut> {
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
  return deletedSaint;
}

export async function restoreSaint(id: number): Promise<SaintOutPut> {
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
  return restoredSaint;
}
