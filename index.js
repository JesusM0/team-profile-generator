const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");

const GenerateHtml = require('./src/generatehtml');

const teamArray = [];

function managerCreation() {

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter You Name.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name.');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter Your Company ID.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your employee ID.');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter Your Email Address.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your work email address.');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'Enter Your Offic Number',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your office number.');
                    return false
                }
            }
        }
    ])

        .then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
            teamArray.push(manager);
            teamCreation();
        })
};

function teamCreation() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'teamchoice',
            message: 'Enter Type of Member to Add',
            choices: ['Engineer', 'Intern', 'No Additonal Members']
        }
    ])
        .then(answer => {
            switch (answer.teamchoice) {
                case 'Engineer':
                    engineerCreation();
                    break;
                case 'Intern':
                    internCreation();
                    break;
                default:
                    teamConstruct();
            }
        })
}

function teamConstruct() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, GenerateHtml(teamArray), 'utf-8');
}

//funciton that generates Engineer
function engineerCreation() {

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter You Name.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name.');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter Your Company ID.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your employee ID.');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter Your Email Address.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your work email address.');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter Your Github UserName.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                    return false
                }
            }
        }
    ])

        .then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            teamArray.push(engineer);
            teamCreation();
        })
};

//function that generates Intern
function internCreation() {

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter You Name.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name.');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter Your Company ID.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your employee ID.');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter Your Email Address.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your work email address.');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter The Name of School Attended.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the school you\'ve attended.');
                    return false
                }
            }
        }
    ])

        .then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            teamArray.push(intern);
            teamCreation();
        })
};

managerCreation();