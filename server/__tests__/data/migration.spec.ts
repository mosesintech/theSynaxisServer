import knex from '../../data/dbConfig';

describe('Migration Tests', () => {
  beforeAll(async () => {
    await knex.migrate.rollback();
    await knex.migrate.latest();
  });

  test('should run saints migration', async () => {
    const result = await knex('saints');
    expect(result.length).toBe(0);
  });

  test('should run works migration', async () => {
    const result = await knex('works');
    expect(result.length).toBe(0);
  });

  afterAll(async () => {
    await knex.migrate.rollback();
    await knex.destroy();
  });
});
