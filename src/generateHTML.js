// Generate HTML for Manager
const generateManager = function (manager) {
  return `
  <div class="row">
  <div class="col s12 m6">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="card-title">Card Title</span>
        <p>I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively.</p>
      </div>
      <div class="card-action">
        <a href="#">This is a link</a>
        <a href="#">This is a link</a>
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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    `;
};

module.exports = generateHTML;
