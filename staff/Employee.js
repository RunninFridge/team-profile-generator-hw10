class Employee  {
    constractor(id, name, email, gitHub){
        this.id = id;
        this.name = name;
        this.email = email;
        this.gitHub = gitHub;
        this.Employee = 'Employee';
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    getGithub(){
        return this.gitHub;
    }
    getPosition(){
        return this.title;
    }
}