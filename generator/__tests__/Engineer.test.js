const Engineer = require("../lib/Engineer.js");
//test to see if this will create an engineer and the github
test("Will create an Engineer", () => {
    const n = new Engineer('engineerTest', 90, 'engineertest@gmail.com', 'TestEngineer345');
    expect(n.gitHub).toEqual(expect.any(String));
});
//test to see if can pull GitHub
test("Will get GitHub username", () => {
    const n = new Engineer('engineerTest', 90, 'engineertest@gmail.com', 'TestEngineer345');
    expect(n.getGitHub()).toEqual(expect.stringContaining(Engineer.gitHub.toString()));
});
//test to see if this gets their title
test("Will get the role", () => {
    const n = new Engineer('engineerTest', 90, 'engineertest@gmail.com');
    expect(n.getTitle()).toEqual('engineer');
});