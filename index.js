const fs = require('fs');
const inquirer = require('inquirer');
const generateReadMe = require('./utilities/generateReadMe.js');


const questions = [
     
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
        name: 'author',
        message: 'Enter the authors of your project.'
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
    }
    
    ];

  
   
// TODO: Create a function to initialize app

   function promptQuestions( ) { 
    inquirer.prompt(questions)
    .then(function(data) {

        const readmeData = generateReadMe(data)

        fs.writeFile('README.md', readmeData, err => {
            if (err) {
              reject(err);
              return;
            }
        
            else {
             console.log('Your new ReadMe is ready!');
            }
            
          });
        }
    )};
   

        //call the promptQuestions
        promptQuestions();  

