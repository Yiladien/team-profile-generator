const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./src/generatePage");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// team list array
const teamList = [];

// Function to ask for manager information
const managerPrompt = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the Manager?",
        validate: (managerNameInput) => {
          if (managerNameInput) {
            return true;
          } else {
            console.log("Please enter a Manager name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please provide the manager's employee ID:",
        validate: (employeeIDInput) => {
          if (employeeIDInput) {
            return true;
          } else {
            console.log("Please enter an employee ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please provide the manager's email address:",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Must provide an email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the office number?",
        validate: (officeNumberInput) => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log("Please provide the manager's office number!");
            return false;
          }
        },
      },
    ])
    .then((managerInput) => {
      console.log(managerInput);
      let manager = new Manager(managerInput);
      teamList.push(manager);

      // Combined HTML for manager
      return `<div class="col-12 col-lg-6 col-xl-4">
      <div class="card m-3 shadow">
        <div class="card-header bg-primary bg-gradient text-white py-3">
          <h3>${manager.getName()}</h3>
          <h4>
            ${manager.getIcon()} ${manager.getRole()}
          </h4>
        </div>
        <div class="card-body bg-light py-5">
          <ul class="list-group">
            <li class="list-group-item py-3">${manager.getId()}</li>
            <li class="list-group-item py-3">
            <span>${manager.getEmail()}</span>
            </li>
            <li class="list-group-item py-3">${manager.getOfficeNumber()}</li>
          </ul>
        </div>
      </div>
    </div>`;
    });
};

// Function to ask user for employees
function teamPrompt(teamHTMLcontainer) {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Please choose:",
        name: "action",
        choices: [
          "ADD an Engineer",
          "ADD an Intern",
          "Finish building team page",
        ],
      },
      {
        type: "input",
        name: "name",
        message: "What is the name of the Employee?",
        validate: (employeeNameInput) => {
          if (employeeNameInput) {
            return true;
          } else {
            console.log("Please enter the employee's name!");
            return false;
          }
        },
        when: ({ action }) =>
          action === "ADD an Engineer"
            ? true
            : action === "ADD an Intern"
            ? true
            : false,
      },
      {
        type: "input",
        name: "id",
        message: "Please provide the employee's ID:",
        validate: (employeeIDInput) => {
          if (employeeIDInput) {
            return true;
          } else {
            console.log("Please enter an employee ID!");
            return false;
          }
        },
        when: ({ action }) =>
          action === "ADD an Engineer"
            ? true
            : action === "ADD an Intern"
            ? true
            : false,
      },
      {
        type: "input",
        name: "email",
        message: "Please provide the employee's email address:",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Must provide an email address!");
            return false;
          }
        },
        when: ({ action }) =>
          action === "ADD an Engineer"
            ? true
            : action === "ADD an Intern"
            ? true
            : false,
      },
      {
        type: "input",
        name: "github",
        message: "What is the Engineer's GitHub username?",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please provide the GitHub username!");
            return false;
          }
        },
        when: ({ action }) => action === "ADD an Engineer",
      },
      {
        type: "input",
        name: "school",
        message: "What school does the Intern attend?",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please provide the Intern's school!");
            return false;
          }
        },
        when: ({ action }) => action === "ADD an Intern",
      },
    ])
    .then((teamInput) => {
      if (teamInput.action === "ADD an Engineer") {
        let engineer = new Engineer(teamInput);

        teamList.push(engineer);

        // Adding to existint HTML
        teamHTMLcontainer = `${teamHTMLcontainer}
        <div class="col-12 col-lg-6 col-xl-4">
        <div class="card m-3 shadow">
          <div class="card-header bg-primary bg-gradient text-white py-3">
            <h3>${engineer.getName()}</h3>
            <h4>
              ${engineer.getIcon()} ${engineer.getRole()}
            </h4>
          </div>
          <div class="card-body bg-light py-5">
            <ul class="list-group">
              <li class="list-group-item py-3">${engineer.getId()}</li>
              <li class="list-group-item py-3">
                <span
                  >${engineer.getEmail()}</span
                >
              </li>
              <li class="list-group-item py-3">${engineer.getGithub()}</li>
            </ul>
          </div>
        </div>
      </div>`;

        teamPrompt(teamHTMLcontainer);
      } else if (teamInput.action === "ADD an Intern") {
        let intern = new Intern(teamInput);
        teamList.push(intern);

        // Adding to existint HTML
        teamHTMLcontainer = `${teamHTMLcontainer}
        <div class="col-12 col-lg-6 col-xl-4">
        <div class="card m-3 shadow">
          <div class="card-header bg-primary bg-gradient text-white py-3">
            <h3>${intern.getName()}</h3>
            <h4>
              ${intern.getIcon()} ${intern.getRole()}
            </h4>
          </div>
          <div class="card-body bg-light py-5">
            <ul class="list-group">
              <li class="list-group-item py-3">${intern.getId()}</li>
              <li class="list-group-item py-3">
                <span
                  >${intern.getEmail()}</span
                >
              </li>
              <li class="list-group-item py-3">${intern.getSchool()}</li>
            </ul>
          </div>
        </div>
      </div>`;

        teamPrompt(teamHTMLcontainer);
      } else {
        writeHTMLFile("index.html", generateHTML(teamHTMLcontainer));
      }
    });
}

// Function to write/create the final HTML file
function writeHTMLFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./dist/${fileName}`, data, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "HTML File created!",
      });
    });
  });
}

// Start of app

// Manager prompts
managerPrompt()
  .then((managerHTML) => {
    // team prompts
    return teamPrompt(managerHTML);
  })
  .then((teamHTML) => {
    return generateHTML(teamHTML);
  })
  .catch((err) => {
    // Error catch
    console.log(err);
  });
