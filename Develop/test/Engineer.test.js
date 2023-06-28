const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
  it('should create an Engineer object', () => {
    const engineer = new Engineer('Payton', 3, 'payton@example.com', 'paytongithub');

    expect(engineer.getName()).toEqual('Payton');
    expect(engineer.getId()).toEqual(3);
    expect(engineer.getEmail()).toEqual('payton@example.com');
    expect(engineer.getGithub()).toEqual('paytongithub');
  });

  it('should return the role as "Engineer" when calling getRole()', () => {
    const engineer = new Engineer('Payton', 3, 'payton@example.com', 'paytongithub');

    expect(engineer.getRole()).toEqual('Engineer');
  });
});