// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('.util/generateMarkdown');

//Array of questions for user input
const questions = [{
        type: 'input',
        message: 'What is the name of the project?',
        name: 'Title'
    },
    {
        type: 'input',
        message: "Describe the project, please.",
        name: 'Summary'

    },
    {
        type: 'input',
        message: 'Table of Contents.',
        name: 'TOC'

    },
    {
        type: "input",
        message: "Describe the installation process if any: ",
        name: "installation",
    },
    {
        type: "input",
        message: "What is this project usage for?",
        name: "usage"
    },
    {
        type: "list",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache-2.0",
            "AFL-3.0",
            "GPL-2.0",
            "GPL-3.0",
            "ISC",
            "MIT",
            "MPL-2.0",
            "BSD 2 Clause",
            "BSD 3 Clause",
            "Open"
        ],
        name: "license",
    },
    {
        type: "input",
        message: "Who are the contributors of this projects?",
        name: "contributing"
    },
    {
        type: "input",
        message: "Please add relative path to a screenshot of the project. (1/3)",
        name: "screenshot1",
    },
    {
        type: "input",
        message: "Please add relative path to a screenshot of the project. (2/3)",
        name: "screenshot2",
    },
    {
        type: "input",
        message: "Please add relative path to a screenshot of the project. (3/3) ",
        name: "screenshot3",
    },
    {
        type: "input",
        message: 'How should issues be addressed? (i.e "email dev@email.com")',
        name: "issues"
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email: "
    }


];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();