import { addSaintMutation } from '../../../api/saints/mutations';
import knex from '../../../data/dbConfig';

describe('Saint Mutations', () => {
  beforeAll(async () => {
    await knex.migrate.rollback();
    await knex.migrate.latest();
  });

  describe('addSaint Mutation', () => {
    test('addSaint: success', async () => {
      const saint = {
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
      };
      const result = await addSaintMutation.resolve(null, saint);
      expect(addSaintMutation.name).toEqual('addSaint Mutation');
      expect(addSaintMutation.type.toString()).toEqual('SaintType');
      expect(addSaintMutation.args.name.type.toString()).toEqual('String!');
      expect(addSaintMutation.args.life.type.toString()).toEqual('String!');
      expect(addSaintMutation.args.born.type.toString()).toEqual('String!');
      expect(addSaintMutation.args.died.type.toString()).toEqual('String!');
      expect(addSaintMutation.args.feastDate.type.toString()).toEqual('Int!');
      expect(addSaintMutation.args.feastMonth.type.toString()).toEqual('Int!');
      expect(addSaintMutation.args.isBc.type.toString()).toEqual('Boolean');
      expect(addSaintMutation.args.isMartyr.type.toString()).toEqual('Boolean');
      expect(addSaintMutation.args.isConfessor.type.toString()).toEqual(
        'Boolean'
      );
      expect(addSaintMutation.args.isPatriarch.type.toString()).toEqual(
        'Boolean'
      );
      expect(addSaintMutation.args.isBishop.type.toString()).toEqual('Boolean');
      expect(addSaintMutation.args.isPriest.type.toString()).toEqual('Boolean');
      expect(addSaintMutation.args.isDeacon.type.toString()).toEqual('Boolean');
      expect(addSaintMutation.args.isMonk.type.toString()).toEqual('Boolean');
      expect(addSaintMutation.args.isMarried.type.toString()).toEqual(
        'Boolean'
      );
      expect(addSaintMutation.args.isMale.type.toString()).toEqual('Boolean');
      expect(result.id).toEqual(1);
      expect(result.name).toEqual('Nicholas of Myra');
      expect(result.isBishop).toEqual(true);
    });
  });

  afterAll(async () => {
    await knex.migrate.rollback();
    await knex.destroy();
  });
});
