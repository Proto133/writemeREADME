//Array of License Info
const lArray = [
    "Apache_v2",
    "the Apache License 2.0",
    "https://opensource.org/licenses/Apache-2.0",
    "AFL_v3",
    "the Academic Free License 3.0",
    "https://opensource.org/licenses/AFL-3.0",
    "GPL_v2",
    "the GNU General Public License version 2",
    "https://opensource.org/licenses/GPL-2.0",
    "GPL_v3",
    "the GNU General Public License version 3",
    "https://opensource.org/licenses/GPL-3.0",
    "ISC",
    "the ISC License",
    "https://opensource.org/licenses/ISC",
    "MIT",
    "the MIT License",
    "https://opensource.org/licenses/MIT",
    "MPL_v2",
    "the Mozilla Public License 2.0",
    "https://opensource.org/licenses/MPL-2.0",
    "BSD_2_Clause",
    "the 2-clause BSD License",
    "https://opensource.org/licenses/BSD-2-Clause",
    "BSD_3_Clause",
    "the 3-clause BSD License",
    "https://opensource.org/licenses/BSD-3-Clause",
    "Open",
    "no",
    ""
]

//The Magic (Edit This if you'd like to make the Generated Readme look different.)
function generateMarkdown(data) {
    // console.log('data.license is ', data.license)
    let index = lArray.indexOf(data.license)
        // console.log('index is ', index)
    let lName = lArray[index + 1]
        // console.log('index plus 1 is', index + 1)
        // console.log('lName is ', lName)
    let lLink = lArray[(index + 2)]
        // console.log('lLink is ', lLink)

    // Template Literal for the README output.
    return `
  <h1 align="center">${data.Title} 🎉 </h1>
    
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
  
  ## 👇  Description  👇
---
  
  ${data.Summary}
 
  ## Table of Contents 
  - [Description](#--description--)
  - [Installation Instructions 📣](#installation-instructions-)
  - [Usage 🖱️](#usage-️)
  - [Contributors 🧑‍🤝‍🧑](#contributors-)
  - [Screenshots 📷](#screenshots-)
  - [Questions ❔](#questions-)
  - [License ©️](#license-️)
    
  ## Installation Instructions 📣
---

  ${data.installation}
  
  ## Usage 🖱️
---

  ${data.usage}
  
  ## Contributors 🧑‍🤝‍🧑
---
  ${data.contributing}
  
  ## Screenshots 📷
---

  |  ${data.screenshot1Title}                              | ${data.screenshot2Title}                               | ${data.screenshot3Title}                               | 
  |:------------------------------------------------------:|:------------------------------------------------------:|:------------------------------------------------------:|
  | <img alt="${data.screenshot1Alt}" src="${data.screenshot1}" width="150" height="150"> |<img alt="${data.screenshot2Alt}" src="${data.screenshot2}" width="150" height="150">|<img alt="${data.screenshot3Alt}" src="${data.screenshot3}" width="150" height="150">|
  |                                                        |                                                        |                                                        |
  |                                                        |                                                        |                                                        |   


  ## Questions ❔

---

  ${data.issues}<br />
  <br />
  :octocat: Find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
  <br />
  📬 Email me with any questions: ${data.email}<br /><br />
  
  ## License ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
---
  <br />
  This application is covered by <a href="${lLink}"> ${lName}</a> license. 

  --------------------------- \n \n
  This README was generated with [writemeREADME](https://github.com/proto133/writemeREADME) 
  
`
}
module.exports = generateMarkdown;