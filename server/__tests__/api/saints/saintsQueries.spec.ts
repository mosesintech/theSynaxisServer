import { getSaintsQuery, getSaintQuery } from '../../../api/saints/queries';
import knex from '../../../data/dbConfig';

describe('Saint Queries', () => {
  beforeAll(async () => {
    await knex.migrate.rollback();
    await knex.migrate.latest();
  });

  describe('getSaints Query', () => {
    test('getSaints Query: unseeded', async () => {
      const saints = await getSaintsQuery.resolve();
      expect(getSaintsQuery.name).toEqual('getSaints Query');
      expect(getSaintsQuery.type.toString()).toEqual('[SaintType]');
      expect(getSaintsQuery.args).toEqual({});
      expect(saints).toEqual([]);
    });

    test('getSaints Query: seeded', async () => {
      await knex.seed.run();
      const saints = await getSaintsQuery.resolve();
      expect(saints).toEqual([
        {
          id: 1,
          name: 'Nicholas of Myra',
          life: 'life',
          born: '270',
          died: '343',
          feastMonth: 12,
          feastDate: 6,
          isBc: false,
          isMartyr: false,
          isConfessor: false,
          isPatriarch: false,
          isBishop: true,
          isPriest: false,
          isDeacon: false,
          isMonk: false,
          isMarried: false,
          isMale: true,
          createdAt: expect.any(Date),
          modifiedAt: expect.any(Date),
          isDeleted: false,
        },
      ]);
    });
  });

  describe('getSaint Query', () => {
    beforeAll(async () => {
      await knex.migrate.rollback();
      await knex.migrate.latest();
    });

    test('getSaint Query: unseeded', async () => {
      const args = { id: 1 };
      expect(getSaintQuery.name).toEqual('getSaint Query');
      expect(getSaintQuery.type.toString()).toEqual('SaintType');
      expect(getSaintQuery.args.id.type.toString()).toEqual('ID!');
      await expect(() => getSaintQuery.resolve(null, args)).rejects.toThrow(
        'Saint does not exist'
      );
    });

    test('getSaint Query: seeded', async () => {
      await knex.seed.run();
      const args = { id: 1 };
      const saint = await getSaintQuery.resolve(null, args);
      expect(saint).toEqual({
        id: 1,
        name: 'Nicholas of Myra',
        life: 'life',
        born: '270',
        died: '343',
        feastDate: 6,
        feastMonth: 12,
        isBc: false,
        isMartyr: false,
        isConfessor: false,
        isPatriarch: false,
        isBishop: true,
        isPriest: false,
        isDeacon: false,
        isMonk: false,
        isMarried: false,
        isMale: true,
        createdAt: expect.any(Date),
        modifiedAt: expect.any(Date),
        isDeleted: false,
      });
    });

    test('getSaint: Saint Does Not Exist', async () => {
      const args = { id: 100 };
      await expect(() => getSaintQuery.resolve(null, args)).rejects.toThrow(
        'Saint does not exist'
      );
    });
  });

  afterAll(async () => {
    await knex.migrate.rollback();
    await knex.destroy();
  });
});
