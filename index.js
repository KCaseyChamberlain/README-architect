// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generatePage = require('./src/markdown-template');

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

const promptUser = readmeData => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your README title? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter your README title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: "Enter your README's description (Required)",
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter your README description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'license',
        message: "Enter your README's license (Required)",
        validate: licenseInput => {
          if (licenseInput) {
            return true;
          } else {
            console.log('Please enter your README license!');
            return false;
          }
        }
      },
    //   TABLE OF CONTENTS
      {
        type: 'input',
        name: 'installation',
        message: "Enter your README's installation instructions (Required)",
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('Please enter your README installation instructions!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: "Enter how to use your application (Required)",
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please enter your README usage instructions!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contributing',
        message: "Enter your README's contributing instructions (Required)",
        validate: contributingInput => {
          if (contributingInput) {
            return true;
          } else {
            console.log('Please enter your README contributing instructions!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'tests',
        message: "Enter your README's tests (Required)",
        validate: testsInput => {
          if (testsInput) {
            return true;
          } else {
            console.log('Please enter your README tests instructions!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'githubUser',
        message: 'What is your Github username? (Required)',
        validate: questionsGithubUserInput => {
          if (questionsGithubUserInput) {
            return true;
          } else {
            console.log('Please enter your Github username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'profileLink',
        message: 'What is your Github profile link? (Required)',
        validate: questionsGithubProfileLinkInput => {
          if (questionsGithubProfileLinkInput) {
            return true;
          } else {
            console.log('Please enter your Github profile link!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'emailAddress',
        message: 'What is your email address? (Required)',
        validate: questionsEmailInput => {
          if (questionsEmailInput) {
            return true;
          } else {
            console.log('Please enter your email address!');
            return false;
          }
        }
      },
    ])
    // .then(projectData => {
    //     readmeData.projects.push(projectData);
    //     if (projectData.confirmAddProject) {
    //       return promptProject(readmeData);
    //     } else {
    //       return readmeData;
    //     }
    //   });
  };
  
  promptUser()
  .then(readmeData => {
    console.log(readmeData);
    // return generatePage(readmeData);
  })