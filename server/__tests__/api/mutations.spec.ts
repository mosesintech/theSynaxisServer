import mutations from '../../api/mutations';

describe('GraphQL Mutations', () => {
  test('mutations', () => {
    const fields = mutations.getFields();

    expect(mutations.name).toEqual('Mutations');
    expect(fields.addSaintMutation.name).toEqual('addSaintMutation');
    expect(fields.updateSaintMutation.name).toEqual('updateSaintMutation');
    expect(fields.deleteSaintMutation.name).toEqual('deleteSaintMutation');
    expect(fields.restoreSaintMutation.name).toEqual('restoreSaintMutation');
  });
});
