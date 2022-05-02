// TODO: Include packages needed for this application
//inqui
const inquirer = require("inquirer")
const fs =require("fs")
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: 'input',
        name: 'description',
        message: ' Provide a description of the project (Required)'
      },
      {
        type:'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)'
    
      },
      {
        type: 'confirm',
          name: 'feature',
          message: 'Would you like to feature this project?',
          default: false
    
      },
      {
          type: 'confirm',
          name: 'confirmAddProject',
          message: 'Would you like to enter another project?',
          default: false
    
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile (fileName, data);
    console.log(data, fileName);


}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        writeToFile('userReadme.md', generateMarkdown({...answers}))
    })
}
//in ...answer needs to be a string for generate markdown
// Function call to initialize app
init();
