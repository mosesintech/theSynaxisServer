type DBWork = {
  id?: number;
  title?: string;
  published_date?: string;
  saint_id?: number;
  created_at?: string;
  modified_at?: string;
  is_deleted?: boolean;
};

type GQLWork = {
  id?: number;
  title?: string;
  publishedDate?: string;
  saintId?: number;
  createdAt?: string;
  modifiedAt?: string;
  isDeleted?: boolean;
};

export function DbToGQLTransformWorkData(work: DBWork): GQLWork {
  if (work.id) {
    const transformedWork = {
      id: work.id,
      title: work.title,
      publishedDate: work.published_date,
      saintId: work.saint_id,
      createdAt: work.created_at,
      modifiedAt: work.modified_at,
      isDeleted: work.is_deleted,
    };
    return transformedWork;
  }
  const transformedWork = {
    title: work.title,
    publishedDate: work.published_date,
    saintId: work.saint_id,
    createdAt: work.created_at,
    modifiedAt: work.modified_at,
    isDeleted: work.is_deleted,
  };
  return transformedWork;
}

export function GQLToDbTransformWorkData(work: GQLWork): DBWork {
  if (work.id) {
    const transformedWork = {
      id: work.id,
      title: work.title,
      published_date: work.publishedDate,
      saint_id: work.saintId,
      created_at: work.createdAt,
      modified_at: work.modifiedAt,
      is_deleted: work.isDeleted,
    };
    return transformedWork;
  }
  const transformedWork = {
    title: work.title,
    published_date: work.publishedDate,
    saint_id: work.saintId,
    created_at: work.createdAt,
    modified_at: work.modifiedAt,
    is_deleted: work.isDeleted,
  };
  return transformedWork;
}
