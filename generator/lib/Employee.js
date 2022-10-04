class Employee  {
    constractor(id, name, email){
        this.id = id;
        this.name = name;
        this.email = email;
        this.title = 'Employee';
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
    getTitle(){
        return this.title;
    }
}
module.exports = Employee;