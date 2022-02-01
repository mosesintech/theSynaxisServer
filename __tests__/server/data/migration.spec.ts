import knex from '../../../server/data/dbConfig';

describe('Migration Tests', () => {
  beforeAll(async () => {
    await knex.migrate.rollback();
    await knex.migrate.latest();
  });

  describe('Saints Migration', () => {
    test('should run saints migration', async () => {
      const result = await knex('saints');
      expect(result.length).toBe(0);
    });
  });

  afterAll(async () => {
    await knex.migrate.rollback();
    await knex.destroy();
  });
});
