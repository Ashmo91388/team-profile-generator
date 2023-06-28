const Manager = require('../lib/Manager');

describe('Manager class', () => {
  it('should create a Manager object', () => {
    const manager = new Manager('Mason', 2, 'mason@example.com', 1001);

    expect(manager.getName()).toEqual('Mason');
    expect(manager.getId()).toEqual(2);
    expect(manager.getEmail()).toEqual('mason@example.com');
    expect(manager.getOfficeNumber()).toEqual(1001);
  });

  it('should return the role as "Manager" when calling getRole()', () => {
    const manager = new Manager('Mason', 2, 'mason@example.com', 1001);

    expect(manager.getRole()).toEqual('Manager');
  });
});