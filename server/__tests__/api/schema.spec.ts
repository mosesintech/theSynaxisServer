import schema from '../../api/schema';

describe('GraphQL Schema', () => {
  test('Schema', async () => {
    expect(schema?.getQueryType()?.toString()).toEqual('RootQuery');
    expect(schema?.getMutationType()?.toString()).toEqual('Mutations');
  });
});
