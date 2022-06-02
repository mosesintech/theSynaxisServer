import { GraphQLID, GraphQLString, GraphQLBoolean, GraphQLInt } from 'graphql';
import SaintType from '../../api/types';

describe('GraphQL Types', () => {
  test('Saint Type', () => {
    const fields = SaintType.getFields();
    expect(SaintType.name).toEqual('SaintType');
    expect(fields.id.type).toEqual(GraphQLID);
    expect(fields.name.type).toEqual(GraphQLString);
    expect(fields.life.type).toEqual(GraphQLString);
    expect(fields.born.type).toEqual(GraphQLString);
    expect(fields.died.type).toEqual(GraphQLString);
    expect(fields.isBc.type).toEqual(GraphQLBoolean);
    expect(fields.feastMonth.type).toEqual(GraphQLInt);
    expect(fields.feastDate.type).toEqual(GraphQLInt);
    expect(fields.isApostle.type).toEqual(GraphQLBoolean);
    expect(fields.isLXX.type).toEqual(GraphQLBoolean);
    expect(fields.isMartyr.type).toEqual(GraphQLBoolean);
    expect(fields.isConfessor.type).toEqual(GraphQLBoolean);
    expect(fields.isPatriarch.type).toEqual(GraphQLBoolean);
    expect(fields.isBishop.type).toEqual(GraphQLBoolean);
    expect(fields.isPriest.type).toEqual(GraphQLBoolean);
    expect(fields.isDeacon.type).toEqual(GraphQLBoolean);
    expect(fields.isMonk.type).toEqual(GraphQLBoolean);
    expect(fields.isMarried.type).toEqual(GraphQLBoolean);
    expect(fields.isMale.type).toEqual(GraphQLBoolean);
    expect(fields.createdAt.type).toEqual(GraphQLString);
    expect(fields.modifiedAt.type).toEqual(GraphQLString);
    expect(fields.isDeleted.type).toEqual(GraphQLBoolean);
  });
});
