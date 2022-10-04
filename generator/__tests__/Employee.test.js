const Employee = require("../lib/Employee.js");
//test to see if this will create an employee
test("Will create an employee", () => {
    const n = new Employee('employeeTest', 9999, 'employeetest@gmail.com');
    expect(n.name).toEqual(expect.any(String));
    expect(n.id).toEqual(expect.any(Number));
    expect(n.email).toEqual(expect.any(String));
});
//test to see if can pull name
test("Will get GitHub username", () => {
    const n = new Employee('employeeTest', 9999, 'employeetest@gmail.com');
    expect(n.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});
//test to see if this gets their ID
test("Will get the role", () => {
    const n = new employee('employeeTest', 9999, 'employeetest@gmail.com');
    expect(n.getId()).toEqual(expect.any(Number));
});
//test to see if can pull email
test("Will get GitHub username", () => {
    const n = new Employee('employeeTest', 9999, 'employeetest@gmail.com');
    expect(n.getEmail()).toEqual(expect.stringContaining(employee.gitHub.toString()));
});
//test to see if this gets their title
test("Will get the role", () => {
    const n = new employee('employeeTest', 9999, 'employeetest@gmail.com');
    expect(n.getTitle()).toEqual('Employee');
});