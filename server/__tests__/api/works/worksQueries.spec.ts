import { getWorksQuery, getWorkQuery } from '../../../api/works/queries';
import knex from '../../../data/dbConfig';

describe('Work Queries', () => {
  beforeAll(async () => {
    await knex.migrate.rollback();
    await knex.migrate.latest();
  });

  describe('getWorks Query', () => {
    test('getWorks Query: unseeded', async () => {
      const works = await getWorksQuery.resolve();
      expect(getWorksQuery.name).toEqual('getWorks Query');
      expect(getWorksQuery.type.toString()).toEqual('[WorkType]');
      expect(getWorksQuery.args).toEqual({});
      expect(works).toEqual([]);
    });

    test('getWorks Query: seeded', async () => {
      await knex.seed.run();
      const works = await getWorksQuery.resolve();
      expect(works).toEqual([
        {
          id: 1,
          title: 'Monastic Wisdom',
          publishedDate: 'October 1999',
          saintId: 2,
          createdAt: expect.any(Date),
          modifiedAt: expect.any(Date),
          isDeleted: false,
        },
      ]);
    });
  });

  describe('getWork Query', () => {
    beforeAll(async () => {
      await knex.migrate.rollback();
      await knex.migrate.latest();
    });

    test('getWork Query: unseeded', async () => {
      const args = { id: 1 };
      expect(getWorkQuery.name).toEqual('getWork Query');
      expect(getWorkQuery.type.toString()).toEqual('WorkType');
      expect(getWorkQuery.args.id.type.toString()).toEqual('ID!');
      await expect(() => getWorkQuery.resolve(null, args)).rejects.toThrow(
        'Work does not exist'
      );
    });

    test('getWork Query: seeded', async () => {
      await knex.seed.run();
      const args = { id: 1 };
      const work = await getWorkQuery.resolve(null, args);
      expect(work).toEqual({
        id: 1,
        title: 'Monastic Wisdom',
        publishedDate: 'October 1999',
        saintId: 2,
        createdAt: expect.any(Date),
        modifiedAt: expect.any(Date),
        isDeleted: false,
      });
    });

    test('getWork: Work Does Not Exist', async () => {
      const args = { id: 100 };
      await expect(() => getWorkQuery.resolve(null, args)).rejects.toThrow(
        'Work does not exist'
      );
    });
  });

  afterAll(async () => {
    await knex.migrate.rollback();
    await knex.destroy();
  });
});
