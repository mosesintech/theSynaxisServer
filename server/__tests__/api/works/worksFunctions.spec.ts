import { DbToGQLTransformWorkData } from '../../../api/works/worksFunctions';

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
});
