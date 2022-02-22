// Generate HTML for Manager

const generateManager = function (manager) {
  return `
  <div class="row">
  <div class="col s12 m6">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="card-title">${manager.name}</span>
        <p>${manager.getRole()}</p>
        <div>
        <span>ID: ${manager.id}</span>
        <span>Office Number: ${manager.officeNumber}</span>
      </div>    
        </div>
      <div class="card-action">
        <a href="mailto:${manager.email}" target="_blank">Send ${
    manager.name
  } an email</a>
      </div>
    </div>
  </div>
</div>
`;
};

// Generate HTML for Engineer
const generateEngineer = function (engineer) {
  return `

  <div class="row">
  <div class="col s12 m6">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="card-title">${engineer.name}</span>
        <a class="subtitle is-6" href="mailto:${
          engineer.email
        }" target="_blank">Send ${engineer.email} an email</a>
        <p>${engineer.getRole()}</p>
        <div>
        <span>ID: ${engineer.id}</span>
      </div>    
        </div>
      <div class="card-action">
      <a href="https://github.com/${
        engineer.github
      }" target="_blank">GitHub: https://github.com/${engineer.github}</a>
      </div>
      <div class="card-action">
      <a href="mailto:${engineer.email}" target="_blank">Send ${
    engineer.name
  } an email</a>
    </div>
    </div>
  </div>
</div>
`;
};

// Generate HTML for Intern
const generateIntern = function (intern) {
  return `
  <div class="row">
  <div class="col s12 m6">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="card-title">${intern.name}</span>
        <p>${intern.getRole()}</p>
        <div>
        <span>ID: ${intern.id}</span>
        <span>School: ${intern.school}</span>
      </div>    
        </div>
      <div class="card-action">
        <a href="mailto:${intern.email}" target="_blank">Send ${
    intern.name
  } an email</a>
      </div>
    </div>
  </div>
</div>    
`;
};

// Process team data and create html cards
genHtml = (data) => {
  let pageArray = [];

  const employeeCards = pageArray.join("");

  const generateTeam = generateTeamPage(employeeCards);

  return generateTeam;
};

// Function inserts team cards into HTML body
const generateTeamPage = function (employeeCards) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
    <title>Team Profile</title>
  
    <!-- CSS  -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
    <link href="css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>
    <body>
    ${employeeCards}
    </body>
    <!--  Scripts-->
    <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script src="js/materialize.js"></script>
    <script src="js/init.js"></script>
    </html>
    `;
};

module.exports = generateHTML;
