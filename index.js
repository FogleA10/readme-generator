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
         type:"input",
         name: "installer",
         message: "Does the user need any installation information?"

     },
     {
         type:"input",
         name: "usage",
         message: "What does the user need to know to use this app?",
          
     },
     {
         type:"list",
         name: "license",
         message:"What license do you want to use?",
         choices: ["MIT","Apache","MPL", "None"]

     },
      {
          type: "input",
          name: "contribution",
          message: "What are contribution guide lines? ",

          //git hub username in template i link it to the git hub
          
      },
      {
          type: "input",
          name: "test",
          message: "How can you test this app?",
      },
      {
          type: "input",
          name: "github",
          message: "What is your github username?",
      },
      {
          type:"input",
          name: "email",
          message: "What is your email address?",
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data, fileName);
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    


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
