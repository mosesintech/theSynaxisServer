import mutations from '../../api/mutations';

describe('GraphQL Mutations', () => {
  test('mutations', () => {
    const fields = mutations.getFields();

    expect(mutations.name).toEqual('Mutations');
    expect(fields.addSaintMutation.name).toEqual('addSaintMutation');
    expect(fields.updateSaintMutation.name).toEqual('updateSaintMutation');
    expect(fields.deleteSaintMutation.name).toEqual('deleteSaintMutation');
    expect(fields.restoreSaintMutation.name).toEqual('restoreSaintMutation');
    expect(fields.addWorkMutation.name).toEqual('addWorkMutation');
    expect(fields.updateWorkMutation.name).toEqual('updateWorkMutation');
    expect(fields.deleteWorkMutation.name).toEqual('deleteWorkMutation');
    expect(fields.restoreWorkMutation.name).toEqual('restoreWorkMutation');
  });
});
