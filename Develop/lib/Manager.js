const Employee = require('./Employee');

class Manager {
  constructor(name, id, email, officeNumber) {
    this.employee = new Employee(name, id, email);
    this.officeNumber = officeNumber;
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
    return 'Manager';
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;