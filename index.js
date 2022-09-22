const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./src/generatePage");

const managerPrompt = () => {
  return;
};
const initialQuestions = [
  {
    type: "input",
    name: "managerName",
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
  // {
  //   type: "list",
  //   name: "employeeAdd",
  //   message: "How would you like to proceed?",
  //   choices: ["ADD Engineer", "ADD Intern", "Build team page"],
  //   loop: true,
  //   when: ({ employeeAdd.loop  }) => employeeAdd,
  // },
];
//   {
//     type: "input",
//     name: "employeeID",
//     message: "Please provide the manager's employee ID:",
//     validate: (employeeIDInput) => {
//       if (employeeIDInput) {
//         return true;
//       } else {
//         console.log("Please enter an employee ID!");
//         return false;
//       }
//     },
//   },
//   {
//     type: "input",
//     name: "email",
//     message: "Please provide the manager's email address:",
//     validate: (emailInput) => {
//       if (emailInput) {
//         return true;
//       } else {
//         console.log("Must provide an email address!");
//         return false;
//       }
//     },
//   },
//   {
//     type: "input",
//     name: "officeNumber",
//     message: "What is the office number?",
//     validate: (officeNumberInput) => {
//       if (officeNumberInput) {
//         return true;
//       } else {
//         console.log("Please provide the manager's office number!");
//         return false;
//       }
//     },
//   },

// const employeeInput = [
//   {
//     type: "input",
//     name: "employeeID",
//     message: "Please provide the manager's employee ID:",
//     validate: (employeeIDInput) => {
//       if (employeeIDInput) {
//         return true;
//       } else {
//         console.log("Please enter an employee ID!");
//         return false;
//       }
//     },
//   },
//   {
//     type: "input",
//     name: "email",
//     message: "Please provide the manager's email address:",
//     validate: (emailInput) => {
//       if (emailInput) {
//         return true;
//       } else {
//         console.log("Must provide an email address!");
//         return false;
//       }
//     },
//   },
//   {
//     type: "input",
//     name: "officeNumber",
//     message: "What is the office number?",
//     validate: (officeNumberInput) => {
//       if (officeNumberInput) {
//         return true;
//       } else {
//         console.log("Please provide the manager's office number!");
//         return false;
//       }
//     },
//   },
// ];

// test
function init() {
  inquirer
    .prompt(managerPrompt)
    .then((managerInput) => {
      console.log(managerInput);
      return employeeInput(managerInput);
    })
    .then((employeeData) => {
      // Combine manager and employee data

      // Send to looping function
      return addTeamMember(teamList);
    })
    .then((writeFileResponse) => {
      console.log(writeFileResponse);
    })
    .catch((err) => {
      console.log(err);
    });
}

init();

// function to create the html output file
// function writeToFile(fileName, data) {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(`./dist/${fileName}`, data, (err) => {
//       if (err) {
//         reject(err);
//         return;
//       }

//       resolve({
//         ok: true,
//         message: "File created!",
//       });
//     });
//   });
// }

// function to initialize app
// function init() {
//   inquirer
//     .prompt(initialQuestions)
//     .then((userInput) => {
//       console.log("creating html syntax from input");
//       return generateHTML(userInput);
//     })
//     .then((markdownData) => {
//       console.log("writing html file");
//       return writeToFile("README.md", markdownData);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// call to initialize app
// init();
