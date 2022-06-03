// import { format } from 'date-fns';
import knex from '../../../data/dbConfig';
import { getWork, getWorks } from '../../../api/works/worksModel';

describe('Works Data Model Functions', () => {
  beforeAll(async () => {
    await knex.migrate.rollback();
    await knex.migrate.latest();
    await knex.seed.run();
  });

  describe('Retrieve Data', () => {
    describe('getWork', () => {
      test('getWork: success', async () => {
        const id = 1;
        const result = await getWork(id);
        expect(result).toEqual({
          id: 1,
          title: 'Monastic Wisdom',
          publishedDate: 'October 1999',
          saintId: 2,
          createdAt: expect.any(Date),
          modifiedAt: expect.any(Date),
          isDeleted: false,
        });
      });

      test('getWork failure: ID Does Not Exist', async () => {
        const id = 10;
        await expect(() => getWork(id)).rejects.toThrow('Work does not exist');
      });
    });

    describe('getWorks', () => {
      test('getWorks: success', async () => {
        const result = await getWorks();
        expect(result.length).toEqual(1);
        expect(result[0].title).toEqual('Monastic Wisdom');
        // This ensures all saints have passed through DBtoGQL transform.
        expect(result[0].publishedDate).toEqual('October 1999');
      });
    });
  });

  afterAll(async () => {
    await knex.migrate.rollback();
    await knex.destroy();
  });
});
