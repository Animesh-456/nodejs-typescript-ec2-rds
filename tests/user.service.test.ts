import * as userService from '../src/services/user.service';

jest.mock('../src/db', () => ({
  pool: {
    query: jest.fn().mockImplementation((sql: string, values?: any[]) => {
      if (sql.includes('SELECT')) {
        return [[{ id: 1, name: 'Test', email: 'test@example.com' }]];
      }
      return [{}];
    }),
  },
}));

describe('User Service', () => {
  it('should fetch users', async () => {
    const users = await userService.getUsers();
    expect(users).toEqual([{ id: 1, name: 'Test', email: 'test@example.com' }]);
  });

  it('should insert a user', async () => {
    await expect(userService.createUser('John', 'john@example.com')).resolves.toBeUndefined();
  });
});
