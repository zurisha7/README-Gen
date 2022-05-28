const fs = require('fs');
const inquirer = require('inquirer');
const writeToFile = require('./src/page-template');
const renderLicenseBadge = require('./utilities/generateReadMe');
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
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project. Please only choose one',
        choices: ['Apache', 'GPLv3', 'BSD', 'Boost', 'CC0', 'MIT', 'GNU', 'Mozilla'],
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
             return data;
        
        })     
          
    };

// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./index.html', writeToFile(JSON.stringify(fileContent)), err => {
        if (err) {
          reject(err);
          return;
        }
        
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };
   
// TODO: Create a function to initialize app

   promptQuestions( ) 
        .then(pageHTML => {
        return writeFile(pageHTML);
    }) 
    .then(writeFileResponse => {
        console.log(writeFileResponse); 
    })
    .catch(err => {
        console.log(err);
    });
        


   
 
  

module.exports =  promptQuestions;