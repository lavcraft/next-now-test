import { hello } from './hello-world';

test('Can import and run', () => {
  expect(hello).toEqual('Hello World');
});

test('Returns Correct Test Credentials', () => {
  const testDbPath = process.env.TYPEORM_DATABASE || 'NO ENV';
  const appEnv = process.env.APP_ENV || 'NO APP ENV FOUND';

  expect(appEnv).toEqual('LOCAL TESTING');
  expect(testDbPath).toEqual('next_now_test_test');
});
