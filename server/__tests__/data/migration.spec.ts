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

  test('should run citations migration', async () => {
    const result = await knex('citations');
    expect(result.length).toBe(0);
  });

  test('should run quotes migration', async () => {
    const result = await knex('quotes');
    expect(result.length).toBe(0);
  });

  // qcategories is not a typo. This is for quote categories.
  // there may be other kinds of categories in the future.
  test('should run qcategories migration', async () => {
    const result = await knex('qcategories');
    expect(result.length).toBe(0);
  });

  afterAll(async () => {
    await knex.migrate.rollback();
    await knex.destroy();
  });
});
