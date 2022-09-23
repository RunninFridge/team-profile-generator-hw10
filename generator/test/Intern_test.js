const Intern = require("../staff/Intern.js");
//Test to greate an intern and their school
test("Will create an Intern", () => {
    const n = new Inter('internTest', 9999, 'interntest@gmail.com', 'UW');
    expect(n.school).toEqual(expect.any(String));
});
//test to see if can pull 'school'
test("gets interns school", () => {
    const n = new Intern('internTest', 9999, 'intertest@gmail.com', 'UW');
    expect(n.getSchool()).toEqual(expect.stringContaining(n.school.toString()));
});
//test to see if this gets their title
test("Will get the role", () => {
    const n = new Inter('internTest', 9999, 'interntest@gmail.com');
    expect(n.getTitle()).toEqual('Intern');
});