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
const genTeam = [];
//iquirer for selecting which member to add
function start() {
    addStaff();
};
//initial iquirer to add a member
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
        genTeam.push(manager);
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
        genTeam.push(engineer);
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
        genTeam.push(intern);
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
        fs.writeFileSync(outputPath, render(genTeam), 'UTF-8');
        console.log('Created Output folder with your new member list!')
    };
};
//html taken from internet
// function to generate html page
function renderHTML() {
    const htmlPage = [];
    const htmlHead =
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div class"container">
            <div class="jumbotron text-center">
                <div class="content">
                    <h1 class="team-display">Team</h1>
                </div>
            </div>
        </div>

        <div class="container>
            <div class="row p-3 d-flex justify-content-between">`

                htmlPage.push(htmlHead);
                for (let i = o; i < employees.length; i++) {
                    let card =`
                        <div class="card" style="width: 19rem">
                            <div class="card-body">
                                <h3 class="card-title">${employees[i].name}</h3>
                                <h5 class="card-subtitle">${employees[i].role}</h5>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <strong>ID:</strong> ${employees[i].id}
                                    </li>
                                    <li class="list-group-item">
                                        <strong>Email:</strong>
                                    <a href="mailto:${employees[i].email}"> ${employees.email}</a>
                                    </li>`;
                    if (employees[i].officeNumber) {
                        card +=`
                            <li class="list-group-item">
                                <strong>Office Number:</strong>${employees[i].officeNumber}
                            </li>`;
                    if (employees[i].github) {
                        card +=`
                            <li class="list-group-item">
                                <strong>GitHub Username:</strong>${employees[i].gitHub}
                            </li>`;
                    if (employees[i].school) {
                        card +=`
                            <li class="list-group-item">
                                 <strong>School Name:</strong>${employees[i].school}
                            </li>`;
                    }
                    card +=`
                                </ul>
                }
                        </div>
                 </div>`;
    htmlHead.push(card);
            }
    const htmlFoot =`
                </div>
            </div>
        </div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
    </body>
    </html>`;
                htmlPage.push(htmlFoot);

                fs.writeFile('dist/index.html', htmlPage.join(''), (err) =>
                    err ? console.log(err) : console.log('Created index.html!')
                    );
}}}
start();