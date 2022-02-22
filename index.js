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
