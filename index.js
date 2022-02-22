//required packages
const inquirer = require("inquirer");
const fs = require("fs");

//function to generate html with template
const generateHTML = require("./src/generateHTML.js");

//constructor functions for different types of employee
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//array to hold team to push it to html template
const teamArray = [];