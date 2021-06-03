// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
  <h1 align="center">${data.Title} 🎉 </h1>
    
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
  
  ## 👇  Description  👇
   ${data.Summary}
 
  ## Table of Contents 
  - [Description](#description)
  - [Screenshots](#screenshots)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Questions](#questions)
  - [License](#license)
  
  ## Installation Instructions 📣
  ${data.installation}
  
  ## Usage 🖱️
  ${data.usage}
  
  ## Contributors 🧑‍🤝‍🧑
  ${data.contributing}
  
  ## Screenshots 📷
  |  ${data.screenshot1Title}                              | ${data.screenshot2Title}                               | ${data.screenshot3Title}                               | 
  |:------------------------------------------------------:|:------------------------------------------------------:|:------------------------------------------------------:|
  | <img alt="${data.screenshot1Alt}" src="${data.screenshot1}" width="150" height="150"> |<img alt="${data.screenshot2Alt}" src="${data.screenshot2}" width="150" height="150">|<img alt="${data.screenshot3Alt}" src="${data.screenshot3}" width="150" height="150">|
  |                                                        |                                                        |                                                        |
  |                                                        |                                                        |                                                        |   
  ## Questions ❔
  ${data.issues}<br />
  <br />
  :octocat: Find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
  <br />
  📬 Email me with any questions: ${data.email}<br /><br />
  
  _This README was generated with [writemeREADME](https://github.com/proto133/writemeREADME) 🔥🔥🔥_
  
## License 🧑‍🤝‍🧑
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
<br />
This application is covered by the ${data.license} license. 
`
}
module.exports = generateMarkdown;