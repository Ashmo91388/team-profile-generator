const Employee = require('./Employee');

class Intern {
  constructor(name, id, email, school) {
    this.employee = new Employee(name, id, email);
    this.school = school;
  }

  getName() {
    return this.employee.getName();
  }

  getId() {
    return this.employee.getId();
  }

  getEmail() {
    return this.employee.getEmail();
  }

  getRole() {
    return 'Intern';
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;