import request from 'supertest';
import app from '../src';

describe('Express App', () => {
  it('should return Hello World', async () => {
    const res = await request(app).get('/');
    expect(res.status).toEqual(200);
    expect(res.text).toEqual('Hello World');
  });
});