import {
  findOne,
  findAll,
  addOne,
  updateOne,
  deleteOne,
  restoreOne,
} from '../../data/dataModel';
import {
  DbToGQLTransformWorkData,
  GQLToDbTransformWorkData,
} from './worksFunctions';

type Work = { [key: string]: undefined | number | string | boolean };

interface WorkInput extends Work {
  id?: number;
  title?: string;
  published_date?: string;
  saint_id?: number;
}

interface WorkOutput extends Work {
  id?: number;
  title?: string;
  publishedDate?: string;
  saintId?: number;
  createdAt?: string;
  modifiedAt?: string;
  isDeleted?: boolean;
}

export async function getWorks() {
  const works = await findAll('works');
  const transformedWorks = works.map((work: WorkInput) => {
    return DbToGQLTransformWorkData(work);
  });
  return transformedWorks;
}

export async function getWork(id: number): Promise<WorkOutput> {
  let work = {};
  try {
    work = await findOne('works', id);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(`Work does not exist`);
  }
  const transformedWork = DbToGQLTransformWorkData(work);
  return transformedWork;
}

export async function addWork(work: WorkInput): Promise<WorkOutput> {
  const dbWork = GQLToDbTransformWorkData(work);
  const addedWork = await addOne('works', dbWork);
  const gqlWork = DbToGQLTransformWorkData(addedWork);
  return gqlWork;
}

export async function updateWork(work: WorkInput): Promise<WorkOutput> {
  const dbWork = GQLToDbTransformWorkData(work);
  const addedWork = await updateOne('works', dbWork);
  const gqlWork = DbToGQLTransformWorkData(addedWork);
  return gqlWork;
}

export async function deleteWork(id: number): Promise<WorkOutput> {
  let deletedWork = {};
  try {
    deletedWork = await deleteOne('works', id);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const doesNotExist = 'Item does not exist';
    throw new Error(
      `Work ${
        error.message === doesNotExist ? 'does not exist' : 'already deleted'
      }`
    );
  }
  const transformedWork = DbToGQLTransformWorkData(deletedWork);
  return transformedWork;
}

export async function restoreWork(id: number): Promise<WorkOutput> {
  let restoredWork = {};
  try {
    restoredWork = await restoreOne('works', id);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const doesNotExist = 'Item does not exist';
    throw new Error(
      `Work ${
        error.message === doesNotExist ? 'does not exist' : 'already deleted'
      }`
    );
  }
  const transformedWork = DbToGQLTransformWorkData(restoredWork);
  return transformedWork;
}
