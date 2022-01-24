
function renderLicenseBadge(license) {
  if(license !== "none"){
    return `![Github License](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents

  * [Installation](#installation)
  * [Instructions](#instructions)
  * [usage](#usage)
  * [contributors](#contributors)
  * [license](#license)
  * [git](#git)

  ## Installation

  ${data.installation}

  ## Instructions

  ${data.instructions}

  ## usage

  ${data.usage}

  ## contributors

  ${data.contributors}

  ## license

  ${data.license}

  ## git

  ${data.git}

`;
}

module.exports = generateMarkdown;