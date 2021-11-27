import request from 'supertest';
import app from '../configs/express';

describe('Hello world', () => {
  test('Success case', async () => {
    await request(app)
      .get('/')
      .expect((response) => {
        expect(response.body.message).toEqual('hello, world');
      });
  });
});
