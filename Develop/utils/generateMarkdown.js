// returns link for license card at top of markdown
function renderLicenseBadge(license) {
  if (license === 'GNU GPLv3') {
    return 'https://img.shields.io/badge/License-GNU%20GPLv3-blue';
  } else if (license === 'Mozilla Public 2.0') {
    return 'https://img.shields.io/badge/License-Mozilla%20Public%202.0-blue';
  } else if (license === 'Apache 2.0') {
    return 'https://img.shields.io/badge/License-Apache%202.0-blue';
  } else if (license === 'MIT') {
    return 'https://img.shields.io/badge/License-MIT-blue';
  } else if (license === 'Boost Software 1.0') {
    return 'https://img.shields.io/badge/License-Boost%20Software%201.0-blue';
  } else if (license === 'Unlicensed') {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'GNU GPLv3') {
    return `[${license}](https://choosealicense.com/licenses/gpl-3.0/)`;
  } else if (license === 'Mozilla Public 2.0') {
    return `[${license}](https://choosealicense.com/licenses/mpl-2.0/)`;
  } else if (license === 'Apache 2.0') {
    return `[${license}](https://choosealicense.com/licenses/apache-2.0/)`;
  } else if (license === 'MIT') {
    return `[${license}](https://choosealicense.com/licenses/mit/)`;
  } else if (license === 'Boost Software 1.0') {
    return `[${license}](https://choosealicense.com/licenses/bsl-1.0/)`;
  } else if (license === 'Unlicensed') {
    return ``;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Unlicensed') {
    return '';
  } else {
    return `
  ## License 
  This application is covered by ${renderLicenseLink(license)}
  `;
  }
}

// create markdown layout
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![](${renderLicenseBadge(data.license)})

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

  ${renderLicenseSection(data.license)}

  ## Questions
  If you have any questions or issues please contact me [here](${data.email}). If you're interested in seeing more from me you can visit my [GitHub Page](http://github.com/${data.username}).
`;
};

module.exports = generateMarkdown;
