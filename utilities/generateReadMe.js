

// TODO: Create a function to generate markdown for README
function generateReadMe(data) {

  //   return `# ${data.title}
   return `# ${data.title}

   ![badge](https://img.shields.io/badge/license-${data.license}-important)
   
   ## Description
   
    ${data.description}
  
   ## Table of Contents
   - [Description](#description)
   - [Installation](#installation)
   - [Usage](#usage)
   - [Languages](#languages)    
   - [License](#license)
   - [Contact](#contact)

   ##Installation
   ${data.installation}

   ## Usage
   ${data.usage}
     
   ## License
   ![badge](https://img.shields.io/badge/license-${data.license}-important)
   
   Permission given under the ${data.license} license. <https://opensource.org/licenses/${data.license}>
 
 
   ## Contact:
    If you have any questions please contact ${data.author} at ${data.email}
   or on GitHub at <a href='https://github.com/${data.github}.'
`
  
 }
 
 module.exports = generateReadMe;
 
 