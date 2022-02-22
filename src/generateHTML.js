// Generate HTML for Manager

/* const genManager = function (manager) {
    return `
    <div class="card column is-one-third">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="">
            <i class="fas fa-user-tie is-2"></i>
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">${manager.name}</p>
            <a class="subtitle is-6" href="mailto:${manager.email}" target="_blank">${manager.email}</a>
            <p class="subtitle is-6">${manager.getRole()}</p>
          </div>
        </div>
        <div class="content">
          <span>ID: ${manager.id}</span>
          <span>Office Number: ${manager.officeNumber}</span>
        </div>
      </div>
    </div>
    `;
  }; */

const generateManager = function (manager) {
  return `
  <div class="row">
  <div class="col s12 m6">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="card-title">${manager.name}</span>
        <a class="subtitle is-6" href="mailto:${
          manager.email
        }" target="_blank">${manager.email}</a>
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
    </body>
    <!--  Scripts-->
    <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script src="js/materialize.js"></script>
    <script src="js/init.js"></script>
    </html>
    `;
};

module.exports = generateHTML;
