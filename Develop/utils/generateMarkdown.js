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

// returns website for chosen license, if no license return empty string
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

// if there is a license selected then return a license section
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

function renderLicenseTOC(license) {
  if (license === 'Unlicensed') {
    return '';
  } else {
    return `* [License](#license)`
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
  * [Questions](#questions)
  ${renderLicenseTOC(data.license)}
  
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
  If you have any questions or issues please contact me [here](mailto:${data.email}). </br>
  If you're interested in seeing more from me you can visit my [GitHub Page](http://github.com/${data.username}).
`;
};

// links code to index.js 
module.exports = generateMarkdown;
