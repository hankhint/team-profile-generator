//uses employee template to inherit attributes
const Employee = require('./Employee');

//elaborates on inherited employee model for manager
class Manager extends Employee {
    constructor (name, id, email, officeNumber = '') {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }
};

module.exports = Manager;