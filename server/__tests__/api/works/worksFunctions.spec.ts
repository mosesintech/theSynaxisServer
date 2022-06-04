import {
  DbToGQLTransformWorkData,
  GQLToDbTransformWorkData,
} from '../../../api/works/worksFunctions';

describe('Saint Business Logic Helper Functions', () => {
  describe('DbToGQLTransformWorkData', () => {
    test('DbToGQLTransformWorkData No ID: Success', async () => {
      const work = {
        title: 'Monastic Wisdom',
        published_date: 'October 1999',
        saint_id: 2,
        created_at: `${new Date()}`,
        modified_at: `${new Date()}`,
        is_deleted: false,
      };
      const result = DbToGQLTransformWorkData(work);
      expect(result).not.toEqual(work);
      expect(result.title).toEqual(work.title);
      expect(result.publishedDate).toEqual(work.published_date);
      expect(result.saintId).toEqual(work.saint_id);
      expect(result.createdAt).toEqual(work.created_at);
      expect(result.modifiedAt).toEqual(work.modified_at);
      expect(result.isDeleted).toEqual(work.is_deleted);
    });

    test('DbToGQLTransformSaintData With ID: Success', async () => {
      const work = {
        id: 1,
        title: 'Monastic Wisdom',
        published_date: 'October 1999',
        saint_id: 2,
        created_at: `${new Date()}`,
        modified_at: `${new Date()}`,
        is_deleted: false,
      };
      const result = DbToGQLTransformWorkData(work);
      expect(result).not.toEqual(work);
      expect(result.id).toEqual(work.id);
      expect(result.title).toEqual(work.title);
      expect(result.publishedDate).toEqual(work.published_date);
      expect(result.saintId).toEqual(work.saint_id);
      expect(result.createdAt).toEqual(work.created_at);
      expect(result.modifiedAt).toEqual(work.modified_at);
      expect(result.isDeleted).toEqual(work.is_deleted);
    });
  });

  describe('GQLToDbTransformWorkData', () => {
    test('GQLToDbTransformWorkData No ID: Success', async () => {
      const work = {
        title: 'Monastic Wisdom',
        publishedDate: 'October 1999',
        saintId: 2,
        createdAt: `${new Date()}`,
        modifiedAt: `${new Date()}`,
        isDeleted: false,
      };
      const result = GQLToDbTransformWorkData(work);
      expect(result).not.toEqual(work);
      expect(result.title).toEqual(work.title);
      expect(result.published_date).toEqual(work.publishedDate);
      expect(result.saint_id).toEqual(work.saintId);
      expect(result.created_at).toEqual(work.createdAt);
      expect(result.modified_at).toEqual(work.modifiedAt);
      expect(result.is_deleted).toEqual(work.isDeleted);
    });

    test('GQLToDbTransformWorkData With ID: Success', async () => {
      const work = {
        id: 1,
        title: 'Monastic Wisdom',
        publishedDate: 'October 1999',
        saintId: 2,
        createdAt: `${new Date()}`,
        modifiedAt: `${new Date()}`,
        isDeleted: false,
      };
      const result = GQLToDbTransformWorkData(work);
      expect(result).not.toEqual(work);
      expect(result.id).toEqual(work.id);
      expect(result.title).toEqual(work.title);
      expect(result.published_date).toEqual(work.publishedDate);
      expect(result.saint_id).toEqual(work.saintId);
      expect(result.created_at).toEqual(work.createdAt);
      expect(result.modified_at).toEqual(work.modifiedAt);
      expect(result.is_deleted).toEqual(work.isDeleted);
    });
  });
});
