const Intern = require('../lib/Intern');

describe('Intern class', () => {
  it('should create an Intern object', () => {
    const intern = new Intern('Lanice', 4, 'lanice@example.com', 'University of XYZ');

    expect(intern.getName()).toEqual('Lanice');
    expect(intern.getId()).toEqual(4);
    expect(intern.getEmail()).toEqual('lanice@example.com');
    expect(intern.getSchool()).toEqual('University of Los Angeles');
  });

  it('should return the role as "Intern" when calling getRole()', () => {
    const intern = new Intern('Lanice', 4, 'lanice@example.com', 'University of Los Angeles');

    expect(intern.getRole()).toEqual('Intern');
  });
});