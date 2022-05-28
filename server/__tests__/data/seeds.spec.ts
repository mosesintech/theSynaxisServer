import { format } from 'date-fns';
import knex from '../../data/dbConfig';

describe('Seed Tests', () => {
  beforeAll(async () => {
    await knex.migrate.rollback();
    await knex.migrate.latest();
    await knex.seed.run();
  });

  describe('Saints Seed', () => {
    test('should run saints seed', async () => {
      const timestamp = format(new Date(), 'MMMM dd, yyyy');
      const result = await knex('saints');

      expect(result.length).toEqual(1);
      expect(result[0].name).toEqual('Nicholas of Myra');
      expect(result[0].born).toEqual('270');
      expect(result[0].died).toEqual('343');
      expect(result[0].is_bc).toEqual(false);
      expect(result[0].feast_date).toEqual(6);
      expect(result[0].feast_month).toEqual(12);
      expect(result[0].is_martyr).toEqual(false);
      expect(result[0].is_confessor).toEqual(false);
      expect(result[0].is_patriarch).toEqual(false);
      expect(result[0].is_bishop).toEqual(true);
      expect(result[0].is_priest).toEqual(false);
      expect(result[0].is_deacon).toEqual(false);
      expect(result[0].is_monk).toEqual(false);
      expect(result[0].is_married).toEqual(false);
      expect(result[0].is_male).toEqual(true);
      expect(result[0].life).toEqual('life');
      expect(format(result[0].created_at, 'MMMM dd, yyyy')).toEqual(timestamp);
      expect(result[0].modified_at).toEqual(result[0].created_at);
      expect(result[0].is_deleted).toEqual(false);
    });
  });

  afterAll(async () => {
    await knex.migrate.rollback();
    await knex.destroy();
  });
});
