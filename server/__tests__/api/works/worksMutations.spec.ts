import {
  addWorkMutation,
  updateWorkMutation,
  deleteWorkMutation,
  restoreWorkMutation,
} from '../../../api/works/mutations';
import knex from '../../../data/dbConfig';

describe('Work Mutations', () => {
  beforeAll(async () => {
    await knex.migrate.rollback();
    await knex.migrate.latest();
    // must run seed for saints foreign key
    await knex.seed.run();
  });

  test('addWork Mutation', async () => {
    const work = {
      title: 'Unpublished Letter',
      publishedDate: 'Unpublished',
      saintId: 2,
    };
    const result = await addWorkMutation.resolve(null, work);
    expect(addWorkMutation.name).toEqual('addWork Mutation');
    expect(addWorkMutation.type.toString()).toEqual('WorkType');
    expect(result.id).toEqual(2);
    expect(result.title).toEqual('Unpublished Letter');
    expect(result.publishedDate).toEqual('Unpublished');
    expect(result.saintId).toEqual(2);
  });

  test('updateWork Mutation', async () => {
    const work = {
      id: 2,
      publishedDate: '6/4/22',
    };
    const result = await updateWorkMutation.resolve(null, work);
    expect(updateWorkMutation.name).toEqual('updateWork Mutation');
    expect(updateWorkMutation.type.toString()).toEqual('WorkType');
    expect(result.id).toEqual(2);
    expect(result.publishedDate).toEqual(work.publishedDate);
  });

  test('deleteWork Mutation', async () => {
    const args = {
      id: 1,
    };
    const result = await deleteWorkMutation.resolve(null, args);
    expect(deleteWorkMutation.name).toEqual('deleteWork Mutation');
    expect(deleteWorkMutation.type.toString()).toEqual('WorkType');
    expect(deleteWorkMutation.args.id.type.toString()).toEqual('ID!');
    expect(result.id).toEqual(1);
    expect(result.isDeleted).toEqual(true);
  });

  test('restoreWork Mutation', async () => {
    const args = {
      id: 1,
    };
    const result = await restoreWorkMutation.resolve(null, args);
    expect(restoreWorkMutation.name).toEqual('restoreWork Mutation');
    expect(restoreWorkMutation.type.toString()).toEqual('WorkType');
    expect(restoreWorkMutation.args.id.type.toString()).toEqual('ID!');
    expect(result.id).toEqual(1);
    expect(result.isDeleted).toEqual(false);
  });

  afterAll(async () => {
    await knex.migrate.rollback();
    await knex.destroy();
  });
});
