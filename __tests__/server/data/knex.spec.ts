import knex from '../../../server/data/dbConfig';

describe('Database Connection', () => {
  test('ENV Should be Test', async () => {
    const result = process.env.NODE_ENV;
    expect(result).toEqual('test');
    expect(result).not.toEqual('development');
  });

  test('Should connect to the Postgres Test Database', async () => {
    await expect(() => knex.queryBuilder()).rejects.toThrow(
      'select * - SELECT * with no tables specified is not valid'
    );
    await knex.destroy();
  });
});
