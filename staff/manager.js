const Employee = require('./Employee');

class Manager extends Employee {
    constructor(id, name, officeNumber){
        super(id, name, email);
        this.officeNumber = officeNumber;
        this.title = 'Manager';
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}