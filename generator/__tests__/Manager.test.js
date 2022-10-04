const Manager = require("../lib/Manager.js");
//test of creating a new manager and their number
test("Will create a Manager", () => {
    const n = new Manager('managerTest', 9999, 'managertest@gmail.com', 4);
    expect(n.officeNumber).toEqual(expect.any(Number));
});
//Test to see if this gets their title
test("Will get the role", () => {
    const n = new Manager('managerTest', 9999, 'managertest@gmail.com');
    expect(n.getTitle()).toEqual('Manager');
});