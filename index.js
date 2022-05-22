const fs = require('fs');
 const inquirer = require('inquirer')


//TODO: Create an array of questions for user input
const promptQuestions = () => {
     return inquirer
    .prompt ([
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project.'
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
        name: 'Usage',
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
        message: 'Enter your github link.'
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
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU General Public License v2.0', 'Mozilla Public License 2.0', 'The Unlicense', 'NO LICENSE']
    },
    {
        type: 'input',
        name: 'author',
        message: 'Please enter your name.'
    }
            ])
        
        };
// TODO: Create a function to write README file
function writeToFile(README, data) {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>${title}</title>
    </head>
  
    <body>
      <h1>${title}</h1>

    <div>    
      <h2>Table of Contents</h2>
      <ul>
        <li>Description</li>
        <li>Installation</li>
        <li>Usage</li>
        <li>License</li>
        <li>Contributors</li>
        <li>Tests</li>
        <li>Questions</li>
 </div> 
<div>
      <h2>Description</h2>
      <h4>${description}</h4>
      <h3>${id}</h3>
      <h3><a href="${email}"
      <h3><a href="https://github.com/${github}">Github</a></h2>
</div>
<div>
      <h2>Installation<h2>
      <h3>${installation}</h3>
</div>
<div>
    <h2>Usage</h2>
    <h3>${usage}</h3>
</div>
<div>
    <h2>License<h2>
    <h3>${license}</h3>
    <h4>${licensedescription}</h4>
</div>
<div>
    <h2>Contributors<h2>
    <h3>${contributors}</h3>
</div>
<div>
    <h2>Tests<h2>
    <h3>${Test}</h3>
<div>
    <h2>Questions</h2>
    <h3>If you have any questions please contact ${author} at ${contact} or on GitHub at ${github}.<h3>


    </body>
    </html>
    `;
  };
    


// TODO: Create a function to initialize app
function init() {
    promptQuestions();
}

// Function call to initialize app
init();