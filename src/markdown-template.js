// export function to generate entire page
module.exports = templateData => {
    // destructure page data by section
    const { } = templateData;
  
    return `
    ## ${data.titleInput} 

    ### Description
    *${data.descriptionInput}*
    
    \n![${data.license}](${licenseIcon}) 
    
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
    Packages required to run this program are: ${data.installationInput}
    
    ### Usage
    How to use this program: ${data.usageInput}
    
    ### Contributing
    ${data.contributingInput}

    ### Tests
    ${data.testsInput}
    
    ### Questions
    GitHub Username: (${data.questionsGithubUserInput}) 
    \nView the project in GitHub at: ${data.questionsGithubProfileLinkInput}
    \nIf you have any questions, contact the Casey at ${data.questionsEmailInput}.
    `
  };