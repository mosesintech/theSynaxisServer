import { format } from 'date-fns';
import knex from '../../data/dbConfig';

describe('Seed Tests', () => {
  beforeAll(async () => {
    await knex.migrate.rollback();
    await knex.migrate.latest();
    await knex.seed.run();
  });

  test('should run saints seed', async () => {
    const timestamp = format(new Date(), 'MMMM dd, yyyy');
    const result = await knex('saints');

    expect(result.length).toEqual(2);
    expect(result[0].name).toEqual('Nicholas of Myra');
    expect(result[1].name).toEqual('Joseph the Hesychast');
    expect(result[0].born).toEqual('270');
    expect(result[0].died).toEqual('343');
    expect(result[0].is_bc).toEqual(false);
    expect(result[0].feast_date).toEqual(6);
    expect(result[0].feast_month).toEqual(12);
    expect(result[0].is_apostle).toEqual(false);
    expect(result[0].is_lxx).toEqual(false);
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

  test('should run works seed', async () => {
    const timestamp = format(new Date(), 'MMMM dd, yyyy');
    const result = await knex('works');

    expect(result.length).toEqual(1);
    expect(result[0].title).toEqual('Monastic Wisdom');
    expect(result[0].published_date).toEqual('October 1999');
    expect(result[0].saint_id).toEqual(2);
    expect(format(result[0].created_at, 'MMMM dd, yyyy')).toEqual(timestamp);
    expect(result[0].modified_at).toEqual(result[0].created_at);
    expect(result[0].is_deleted).toEqual(false);
  });

  test('should run citations seed', async () => {
    const timestamp = format(new Date(), 'MMMM dd, yyyy');
    const result = await knex('citations');

    expect(result.length).toEqual(1);
    expect(result[0].publication_city).toEqual('Florence, Arizona');
    expect(result[0].publication_year).toEqual('1999');
    expect(result[0].page_start).toEqual('83');
    expect(result[0].page_end).toEqual('83');
    expect(result[0].work_id).toEqual(1);
    expect(format(result[0].created_at, 'MMMM dd, yyyy')).toEqual(timestamp);
    expect(result[0].modified_at).toEqual(result[0].created_at);
    expect(result[0].is_deleted).toEqual(false);
  });

  test('should run qcategories seed', async () => {
    const timestamp = format(new Date(), 'MMMM dd, yyyy');
    const result = await knex('qcategories');

    expect(result.length).toEqual(1);
    expect(result[0].name).toEqual('temptation');
    expect(format(result[0].created_at, 'MMMM dd, yyyy')).toEqual(timestamp);
    expect(result[0].modified_at).toEqual(result[0].created_at);
    expect(result[0].is_deleted).toEqual(false);
  });

  afterAll(async () => {
    await knex.migrate.rollback();
    await knex.destroy();
  });
});
