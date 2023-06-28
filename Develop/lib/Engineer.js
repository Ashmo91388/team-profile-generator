const Employee = require('./Employee');

class Engineer {
  constructor(name, id, email, github) {
    this.employee = new Employee(name, id, email);
    this.github = github;
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
    return 'Engineer';
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;