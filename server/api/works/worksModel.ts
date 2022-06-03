import { findOne, findAll } from '../../data/dataModel';
import { DbToGQLTransformWorkData } from './worksFunctions';

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
