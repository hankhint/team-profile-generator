// Generate HTML for Manager
const generateManager = function (manager) {
    return `
   
    `;
  };
  
  // Generate HTML for Engineer
  const generateEngineer = function (engineer) {
    return `
    <p>engineer card</p>
    `;
  };
  
  // Generate HTML for Intern
  const generateIntern = function (intern) {
    return `
<p>intern card</p>
    `;
  };
  
  // Process team data and create html cards
  genHtml = (data) => {
    let pageArray = [];
  
    const employeeCards = pageArray.join('');
  
    const generateTeam = generateTeamPage(employeeCards);
  
    return generateTeam;
  
  };
  
  // Function inserts team cards into HTML body
  const generateTeamPage = function (employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
<p>generate team page</p>
    `;
  };
  
  module.exports = generateHTML;