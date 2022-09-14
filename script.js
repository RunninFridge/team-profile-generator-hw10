// listing recources used - ptah idea taken from google
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const { start } = require('repl');
// listing staff
const Manager = require('./staff/manager');
const Engineer = require('./staff/Engineer');
const Intern = require('./staff/intern');


//Code for inquirer to get data
const team = [];
//iquirer for selecting which member to add
function start() {
    addStaff();
};

function addStaff(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'who',
            message: "Who would you like to add to the team?",
        },
    ]).then((input) => {
    if (input.who === 'Manager'){
        managerInput();
    } else if (input.who === 'Engineer'){
        engineerInput();
    } else if (input.who === 'Intern'){
        internInput();
    } else {
        createStaffList();
    }
});
};
//iquirer questions
function managerInput(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?",
        },
    ]).then((data) => {
        const manager = new Manager(
            data.id,
            data.name,
            data.email,
            data.officeNumber,
        );
        team.push(manager);
        addStaff();
      });
};

function engineerInput(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Engineer's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Engineer's ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Engineer's email?",
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the Engineer's GitHub username?",
        },
    ]).then((data) => {
        const engineer = new Engineer(
            data.id,
            data.name,
            data.email,
            data.github,
        );
        team.push(engineer);
        addStaff();
    });
};

function internInput(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Inter's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Inter's ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Inter's email?",
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the Inter's school?",
        },
    ]).then((data) => {
        const intern = new Intern(
            data.id,
            data.name,
            data.email,
            data.school,
        );
        team.push(intern);
        addStaff();
    });
};
//Had to look up this function - wasn't sure if needed to create a new folder tho
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

function createStaffList() {
    if (!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR);
    } else {
        fs.writeFileSync(outputPath, render(team), 'UTF-8');
        console.log('Created Output folder with your new member list!')
    };
};

start();