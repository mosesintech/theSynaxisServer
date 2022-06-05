import rootQuery from '../../api/rootQuery';

describe('GraphQL Root Query', () => {
  test('rootQuery', () => {
    const fields = rootQuery.getFields();

    expect(rootQuery.name).toEqual('RootQuery');
    expect(fields.getSaintQuery.name).toEqual('getSaintQuery');
    expect(fields.getSaintsQuery.name).toEqual('getSaintsQuery');
    expect(fields.getWorkQuery.name).toEqual('getWorkQuery');
    expect(fields.getWorksQuery.name).toEqual('getWorksQuery');
  });
});
