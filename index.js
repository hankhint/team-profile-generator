//required packages
const inquirer = require("inquirer");
const fs = require("fs");

//function to generate html with template
const generateHTML = require("./src/generateHTML.js");

//constructor functions for different types of employee
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//array to hold team to push it to html template
const teamArray = [];

//questions for manager
const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Welcome, manager, please enter your name.",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Manager, please enter your name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter your work ID.",
        validate: (idInput) => {
          if (isNaN(idInput)) {
            console.log("Please enter your work ID.");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your email.",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your work email.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter the office number of the manager.",
        validate: (officeNumberInput) => {
          if (isNaN(officeNumberInput)) {
            console.log("Please enter the correct office number.");
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);

      teamArray.push(manager);
      console.log(manager);
    });
};

const addEmployee = () => {
  console.log(`
    -------------------
    Adding the value adders!
    `);
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Would you like to an engineer or an intern?",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "Please enter the name of the employee.",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Enter the name of the employee.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the employee id.",
        validate: (idInput) => {
          if (isNaN(idInput)) {
            console.log("Enter the employee's ID.");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the email of the employee.",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Enter your work email.");
            return false;
          }
        },
      },
      {
        // inquirer prompt for the engineer
        type: "input",
        name: "github",
        message: "Please enter the GitHub username of the employee.",
        when: (input) => input.role === "Engineer",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Enter the GitHub username for the employee.");
          }
        },
      },
      {
        // inquirer prompts for the intern
        type: "input",
        name: "school",
        message: "Please enter the name of the school of the intern",
        when: (input) => input.role === "Intern",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Enter the name of the school of the intern");
          }
        },
      },
      {
        type: "confirm",
        name: "confirmEmployee",
        message: "Would you like to add more employees to your team profile?",
        default: false,
      },
    ])
    .then((employeeData) => {
      let { name, id, email, role, github, school, confirmEmployee } =
        employeeData;
      let employee;

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
        console.log(employee);
      }

      teamArray.push(employee);

      if (confirmEmployee) {
        return addEmployee(teamArray);
      } else {
        return teamArray;
      }
    });
};
