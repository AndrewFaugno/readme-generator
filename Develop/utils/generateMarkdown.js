// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// create markdown layout
function generateMarkdown(data) {
  return `
  # ${data.title}
  // license badge insert here

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Test](#test)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation
  ${data.install}
  
  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contributing}

  ## Test
  ${data.test}

  ## License
  This repositoy is licensed by ${data.license}.
  // if no license ^ empty string

  ## Questions
  If you have any questions or issues please contact me [here](${data.email}). If you're interested in seeing more from me you can visit my [GitHub Page](http://github.com/${data.username}).
`;
};

module.exports = generateMarkdown;
