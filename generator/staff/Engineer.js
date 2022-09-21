const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(id, name, gitHub) {
        super(id, name, email)
        this.gitHub = gitHub;
        this.title = 'Engineer';
    }
    getGitHub() {
        return this.gitHub;
    }
    getTitle() {
        return this.title;
    }
}
module.exports = Engineer;