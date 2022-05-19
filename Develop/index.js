// retrieves data from dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { title } = require('process');

// prompts user with questions for readme
const userPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
            validate: usernameInput => {
                if(usernameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!')
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email:',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!')
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of the project?',
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!')
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a detailed description of the project:',
            validate: descriptionInput => {
                if(descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a detailed description of the project!')
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Write a guide for installing your project:',
            validate: installInput => {
                if(installInput) {
                    return true;
                } else {
                    console.log('Please enter a guide for installing your project!')
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are the steps to use this project?',
            validate: usageInput => {
                if(usageInput) {
                    return true;
                } else {
                    console.log('Please enter the usage steps!')
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What are the contribution guidelines for this project?',
            validate: contInput => {
                if(contInput) {
                    return true;
                } else {
                    console.log('Please enter the contribution guidelines!')
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the instructions to test the script?',
            validate: testInput => {
                if(testInput) {
                    return true;
                } else {
                    console.log('Please enter the instructions to test the script!')
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select a license to use:',
            choices: ['GNU GPLv3', 'Mozilla Public 2.0', 'Apache 2.0', 'MIT', 'Boost Software 1.0', 'Unlicensed'],
        }
    ]);
};

// runs prompt, sends data to markdownGenerator, writes/overwrites markdown file and logs if it was successful
userPrompt()
    .then(projectData => {
        const readmeMarkdown = generateMarkdown(projectData);

        fs.writeFile('createdREADEME.md', readmeMarkdown, err => {
            if (err) throw err;

            console.log('Readme successfully created!');
        });
    });