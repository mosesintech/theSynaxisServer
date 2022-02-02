import supertest from 'supertest';
import server from '..';

const request = supertest(server);

describe('API Server', () => {
  test('should run server', async () => {
    const result = await request.get('/');
    expect(result.status).toEqual(200);
    expect(result.text).toEqual('Welcome to The Synaxis Server.');
  });
});
