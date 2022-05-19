// retrieves data from dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// prompts user with questions for readme
const userPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email:'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of the project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a detailed description of the project:'
        },
        {
            type: 'input',
            name: 'install',
            message: 'Write a guide for installing your project:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is this project used for?'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'List the contributers for this project'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the instructions to test the script?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select a license to use:',
            choices: ['GNU GPLv3', 'Mozilla Public 2.0', 'Apache 2.0', 'MIT', 'Boost Software 1.0', 'Unlicensed'],
        }
    ]);
};

userPrompt()
    .then(projectData => {
        const readmeMarkdown = generateMarkdown(projectData);

        fs.writeFile('README.md', readmeMarkdown, err => {
            if (err) throw err;

            console.log('Readme successfully created!');
        });
    });