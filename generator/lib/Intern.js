const Employee = require('./Employee');

class Intern extends Employee{
    constructor(id, name, email, school){
    super(id, name, school);
    this.school = school;
    this.title = 'Intern';
    }

    getSchool() {
        return this.school;
    }
    getTitle() {
        return this.title;
    }
}

module.exports = Intern;