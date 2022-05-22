const inquirer = require('inquirer')

//TODO: Create an array of questions for user input
const questions = [
    inquirer
    .prompt ([
            ])
   
       
];


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
      <h3>${}</h3>
</div>
<div>
    <h2>Usage</h2>
    <h3>${}</h3>
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
    <h3>If you have any questions please contact ${name} at ${contact} or on GitHub at ${github}.<h3>


    </body>
    </html>
    `;
  };
    


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();