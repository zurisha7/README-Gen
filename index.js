const fs = require('fs');
 const inquirer = require('inquirer')
 const writeToFile = require('./src/page-template')
const renderLicenseBadge = require('./utilities/generateReadMe')

//TODO: Create an array of questions for user input
const promptQuestions = () => {
     return inquirer
    .prompt ([
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project.',
        validate: titleInput => {
            if(titleInput) {
                return true;
            }else{
                console.log('Please enter your project title!');
                return false;
            }
        }        
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a detailed description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the steps to install the project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: "Enter details of the project's features, interface, and tips you would like to include."
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username.',
        validate: githubInput => {
            if(githubInput) {
                return true;
            }else{
                console.log('Please enter your github link!');
                return false;
            }
        }        

    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Enter the Contributors of your project.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license for your project. Please only choose one',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU General Public License v2.0', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
    {
        type: 'input',
        name: 'author',
        message: 'Please enter your name.',
        validate: authorInput => {
            if(authorInput) {
                return true;
            }else{
                return false;
            }
        }
    }
            ])
        .then(data=> {
            console.log(data)
        
        })
            // .then(projectData => {
            //     portfolioData.projects.push(projectData);
            //     if(projectData.confirmAddProject) {
            //       return promptProject(porfolioData);
            //     } else {
            //       return portfolioData;
            //     }
            //     });
             };
             writeToFile();
       fs.writeFile('./index.html', writeToFile()), err =>{
       if(err)throw new Error(err);

       console.log('README complete! Look at index.html to see the finished product!')
     
       

       }


// TODO: Create a function to write README file



// TODO: Create a function to initialize app
function init() {
   promptQuestions();
}

// Function call to initialize app
init();