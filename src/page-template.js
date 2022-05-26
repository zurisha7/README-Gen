const fs = require('fs');

  function writeToFile(title, description, installation, usage, license, licensedescription, contributors, test, author, email, github) {
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
    <h3>${test}</h3>
<div>
    <h2>Questions</h2>
    <h3>If you have any questions please contact ${author} at ${email}
     or on GitHub at <a href='https://github.com/${github}.'><h3>


    </body>
    </html>
    `;
    
  };

  fs.writeFile('./index.html', writeToFile()), err =>{
  if(err)throw new Error(err);
  };
  console.log('README complete! Look at index.html to see the finished product!')
  
  module.exports = writeToFile;