const Employee = require('../lib/Employee');

describe('Employee class', () => {
  it('should create an Employee object', () => {
    const employee = new Employee('Johnny', 1, 'johnny@example.com');

    expect(employee.name).toEqual('Johnny');
    expect(employee.id).toEqual(1);
    expect(employee.email).toEqual('johnny@example.com');
  });

  it('should return the name when calling getName()', () => {
    const employee = new Employee('Johnny', 1, 'johnny@example.com');

    expect(employee.getName()).toEqual('John');
  });

  it('should return the id when calling getId()', () => {
    const employee = new Employee('Johnny', 1, 'johnny@example.com');

    expect(employee.getId()).toEqual(1);
  });

  it('should return the email when calling getEmail()', () => {
    const employee = new Employee('Johnny', 1, 'johnny@example.com');

    expect(employee.getEmail()).toEqual('johnny@example.com');
  });

  it('should return the role as "Employee" when calling getRole()', () => {
    const employee = new Employee('John', 1, 'johnny@example.com');

    expect(employee.getRole()).toEqual('Employee');
  });
});