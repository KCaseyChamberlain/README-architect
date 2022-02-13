// export function to generate entire page
function generateMarkdown(readmeData){
    return `
## ${readmeData.title} 

### Description
${readmeData.description}

### License
![Github licence](http://img.shields.io/badge/license-${readmeData.license}-blue.svg)
This application is licensed under ${readmeData.license}

### Application Demo
![](images/readme-generator.gif)

### Table of Contents
- [Description](#discription)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions?](#questions)


### Installation
Packages required to run this program are: ${readmeData.installation}

### Usage
How to use this program: ${readmeData.usage}

### Contributing
${readmeData.contributing}

### Tests
${readmeData.tests}

### Questions
GitHub Username: (${readmeData.githubUser}) 
\nView the project in GitHub at: ${readmeData.profileLink}
\nIf you have any questions, contact the Casey at ${readmeData.emailAddress}.
    `
}

module.exports = generateMarkdown