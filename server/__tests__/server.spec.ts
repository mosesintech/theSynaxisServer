import supertest from 'supertest';
import server from '..';
import knex from '../data/dbConfig';

const request = supertest(server);

describe('API Server', () => {
  test('should run server', async () => {
    const result = await request.get('/');
    expect(result.status).toEqual(200);
    expect(result.text).toEqual('Welcome to The Synaxis Server.');
  });

  test('Can Query Server', async () => {
    await request
      .get('/graphql')
      .send({ query: '{ getSaintsQuery { id } }' })
      .then((res) => {
        expect(res.text).toContain('errors');
        expect(res.status).toEqual(200);
      });
    await knex.destroy();
  });
});
