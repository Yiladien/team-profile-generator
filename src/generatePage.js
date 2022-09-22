function generateHTML(data) {
  return `# ${data.title}
  ${licenseBadge}
  ## Description
  
  ${data.description}
  
  ${imgMarkdown}
  
  ---
  ${tableOfContents}
  ---
  ## Installation
  
  ${data.installation}
  
  ---
  ## Usage
  
  ${data.usage}
  
  ---
  ## Contributing
  
  ${data.contribution}
  
  ---
  ## Tests
  
  ${data.tests}
  
  ${licenseSection}
  ---
  ## Questions
  
  Please contact the owner with any questions.
  Email: ${data.email}
  GitHub profile: https://github.com/${data.githubUsername}
  
  
  ---
  `;
}

module.exports = generateHTML;
