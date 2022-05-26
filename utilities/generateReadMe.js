const promptQuestion = require('./index');

//TODO: Create a function that returns a license badge based on which license is passed in
//If there is no license, return an empty string

function renderLicenseBadge(license) {
  let licenseType = data.license;
  let yourLicense = ''

  // assign the badges to the appropriate license
  if(licenseType === 'Apache') {
    yourLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  } else if (licenseType === 'Boost') {
    yourLicense = `[License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`
  } else if (licenseType === 'BSD') {
    yourLicense = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
  } else if (licenseType === 'CC0'){
    yourLicense = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)`
  } else if (licenseType === 'Mozilla'){
    yourLicense = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`
  } else if (licenseType === 'MIT') {
    yourLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  }else if (licenseType === 'GNU'){
    yourLicense = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
  } else if(!licenseType){
    yourLicense = " "
  }
  return yourLicense;

  generateMarkdown(yourLicense);
 }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
 function renderLicenseLink(license) {
   let licenseType = data.license
   let licenseLink = " "
 
// assign the links to the types
 if(licenseType === 'GNU') {
    licenseLink =`https://www.gnu.org/licenses/gpl-3.0`;
 } else if(licenseType === "MIT") {
    licenseLink = `https://opensource.org/licenses/MIT` ;
} else if(licenseType === "Mozilla") {
   licenseLink = `https://opensource.org/licenses/MPL-2.0`;
} else if(licenseType === "GNU"){
  licenseLink = `https://www.gnu.org/licenses/gpl-3.0`;
} else if(licenseType === "CC0") {
  licenseLink = `http://creativecommons.org/publicdomain/zero/1.0/`
} else if(licenseType === "BSD") {
  licenseLink = `https://opensource.org/licenses/BSD-3-Clause`
} else if(licenseType === "Boost") {
  licenseLink =  `https://www.boost.org/LICENSE_1_0.txt`
} else if(licenseType === "Apache") {
  licenseLink = `https://opensource.org/licenses/Apache-2.0`
} else if(!licenseType) {
  licenseLink = ""

  return licenseLink
}
generateMarkdown(licenseLink);

 };
// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {}


module.exports = generateMarkdown;