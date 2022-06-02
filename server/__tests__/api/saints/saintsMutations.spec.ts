import {
  addSaintMutation,
  updateSaintMutation,
  deleteSaintMutation,
  restoreSaintMutation,
} from '../../../api/saints/mutations';
import knex from '../../../data/dbConfig';

describe('Saint Mutations', () => {
  beforeAll(async () => {
    await knex.migrate.rollback();
    await knex.migrate.latest();
  });

  test('addSaint Mutation', async () => {
    const saint = {
      name: 'Nicholas of Myra',
      life: 'life',
      born: '270',
      died: '343',
      feastDate: 6,
      feastMonth: 12,
      isBc: false,
      isApostle: false,
      isLXX: false,
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
    expect(addSaintMutation.args.isApostle.type.toString()).toEqual('Boolean');
    expect(addSaintMutation.args.isLXX.type.toString()).toEqual('Boolean');
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
    expect(addSaintMutation.args.isMarried.type.toString()).toEqual('Boolean');
    expect(addSaintMutation.args.isMale.type.toString()).toEqual('Boolean');
    expect(result.id).toEqual(1);
    expect(result.name).toEqual('Nicholas of Myra');
    expect(result.isBishop).toEqual(true);
  });

  test('updateSaint Mutation', async () => {
    const saint = {
      id: 1,
      life: 'updated life info',
    };
    const result = await updateSaintMutation.resolve(null, saint);
    expect(updateSaintMutation.name).toEqual('updateSaint Mutation');
    expect(updateSaintMutation.type.toString()).toEqual('SaintType');
    expect(updateSaintMutation.args.id.type.toString()).toEqual('ID!');
    expect(updateSaintMutation.args.name.type.toString()).toEqual('String');
    expect(updateSaintMutation.args.life.type.toString()).toEqual('String');
    expect(updateSaintMutation.args.born.type.toString()).toEqual('String');
    expect(updateSaintMutation.args.died.type.toString()).toEqual('String');
    expect(updateSaintMutation.args.feastDate.type.toString()).toEqual('Int');
    expect(updateSaintMutation.args.feastMonth.type.toString()).toEqual('Int');
    expect(updateSaintMutation.args.isBc.type.toString()).toEqual('Boolean');
    expect(updateSaintMutation.args.isApostle.type.toString()).toEqual(
      'Boolean'
    );
    expect(updateSaintMutation.args.isLXX.type.toString()).toEqual('Boolean');
    expect(updateSaintMutation.args.isMartyr.type.toString()).toEqual(
      'Boolean'
    );
    expect(updateSaintMutation.args.isConfessor.type.toString()).toEqual(
      'Boolean'
    );
    expect(updateSaintMutation.args.isPatriarch.type.toString()).toEqual(
      'Boolean'
    );
    expect(updateSaintMutation.args.isBishop.type.toString()).toEqual(
      'Boolean'
    );
    expect(updateSaintMutation.args.isPriest.type.toString()).toEqual(
      'Boolean'
    );
    expect(updateSaintMutation.args.isDeacon.type.toString()).toEqual(
      'Boolean'
    );
    expect(updateSaintMutation.args.isMonk.type.toString()).toEqual('Boolean');
    expect(updateSaintMutation.args.isMarried.type.toString()).toEqual(
      'Boolean'
    );
    expect(updateSaintMutation.args.isMale.type.toString()).toEqual('Boolean');
    expect(result.id).toEqual(1);
    expect(result.name).toEqual('Nicholas of Myra');
    expect(result.isBishop).toEqual(true);
    expect(result.life).toEqual(saint.life);
  });

  test('deleteSaint Mutation', async () => {
    const args = {
      id: 1,
    };
    const result = await deleteSaintMutation.resolve(null, args);
    expect(deleteSaintMutation.name).toEqual('deleteSaint Mutation');
    expect(deleteSaintMutation.type.toString()).toEqual('SaintType');
    expect(deleteSaintMutation.args.id.type.toString()).toEqual('ID!');
    expect(result.id).toEqual(1);
    expect(result.isDeleted).toEqual(true);
  });

  test('restoreSaint Mutation', async () => {
    const args = {
      id: 1,
    };
    const result = await restoreSaintMutation.resolve(null, args);
    expect(restoreSaintMutation.name).toEqual('restoreSaint Mutation');
    expect(restoreSaintMutation.type.toString()).toEqual('SaintType');
    expect(restoreSaintMutation.args.id.type.toString()).toEqual('ID!');
    expect(result.id).toEqual(1);
    expect(result.isDeleted).toEqual(false);
  });

  afterAll(async () => {
    await knex.migrate.rollback();
    await knex.destroy();
  });
});
