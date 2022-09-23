const Employee = require("../staff/Employee.js");
const Engineer = require("../staff/Engineer.js");
const Intern = require("../staff/Intern.js");
const Manager = require("../staff/Manager.js");

const genManager = function(manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="header">
                <h2>${Manager.name}</h3>
                <h3>Manager</h3><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body">
                <p class="id">ID:${Manager.id}</p>
                <p class="email">Email<a href="mailto:${Manager.email}">${Manager.email}</a></p>
                <p class="number">Office Number:${Manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

const genEngineer = function(engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="header">
                <h2>${Engineer.name}</h3>
                <h3>Engineer</h3><i class="material-icons">laptop_mac</i>
            </div>
            <div class="card-body">
                <p class="id">ID:${Engineer.id}</p>
                <p class="email">Email<a href="mailto:${Engineer.email}">${Engineer.email}</a></p>
                <p class="github">GitHub: <a href="https://github.com/${Engineer.gitHub}">${Engineer.gitHub}</a></p>
            </div>
        </div>
    </div>
    `
}
const genIntern = function(intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="header">
                <h2>${Intern.name}</h3>
                <h3>Intern</h3><i class="material-icons">laptop_mac</i>
            </div>
            <div class="card-body">
                <p class="id">ID:${Intern.id}</p>
                <p class="email">Email<a href="mailto:${Intern.email}">${Intern.email}</a></p>
                <p class="school">School:${Intern.school}</p>
            </div>
        </div>
    </div>
    `
}

htmlGenerator = (data) => {
    pageArray = [];
    for (let i = 0; i < data.length; i++){
        const employee = data[i];
        const title = Employee.getTitle()

            if (title === 'Manager') {
                const managerCard = genManager(employee);
                pageArray.push(managerCard);
            }
            if (title === 'Engineer') {
                const engineerCard = genEngineer(employee);
                pageArray.push(engineerCard);
            }
            if (title === 'Intern') {
                const internCard = genIntern(employee);
                pageArray.push(internCard);
            }
    }
const employeeCards = pageArray.join('')
const generateTeam = teamPage(employeeCards);
return generateTeam;
}
const teamPage = function(employeeCards){
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
</head>
<body>
    
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
</html>
`;
};
module.exports = htmlGenerator;