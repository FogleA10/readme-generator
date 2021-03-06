// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![license ](https://img.shields.io/badge/License-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
//create a readme with the necessary elements copy it and paste bellow replace usage
//needs more content $to insert the user puts in questions need to ask for all the specific info in the acceptence criteria
//grab the right value and put in the right places in the create readme file.
//create readme file with all required section for a template
//title, description, languages, link 
// acceptance questions as basis of the template
//use ${}to insert the title as the answer by who is running the program

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description 

${data.description}

## Table of Contents
* [Install](#install)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contribution)
* [Test](#test)
* [Questions](#questions)


## Install
${data.installer}




## Usage

${data.usage}


## License

${data.license}


## Contributing 

${data.contribution}



## Test
${data.test}


## Questions
If you have any questions, contact me by email at [${data.email}](mailto:${data.email}) or on github at [${data.github}](https://github.com/${data.github}).









`;
}

module.exports = generateMarkdown;
