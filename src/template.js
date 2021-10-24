const generateHTML = (team) => {


    const generateManager = manager =>{
      return `<div class="card-deck p-4"style="width: 22rem;">
      <div class="card bg-light p-2">
      <div class="card-header bg-primary ">Manager Profile</div>
      
      <p>Name: ${manager.getName()}</p>
      <p>ID: ${manager.getId()}</p>
      Email:<a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
      <p>Phone number: ${manager.getOfficeNumber()}</p>
    </div>
    </div>`

    }

    const generateEngineer = engineer => {

    return `<div class="card-deck p-4"style="width: 22rem;">
    <div class="card bg-light p-2">
     <div class="card-header bg-primary "> Engineer Profile</div>
      <p>Name: ${engineer.getName()}</p>
      <p>ID: ${engineer.getId()}</p>
      Email:<a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
      Github:<a href="https://github.com/${engineer.getGithub()}"target="_blank">${engineer.getGithub()}</a>
    </div>
    </div>`
    }

    const generateIntern = intern => {
    return `<div class="card-deck p-4"style="width: 22rem;">
    <div class="card bg-light p-2 ">
    <div class="card-header bg-primary">Intern Profile </div>
      
      <p>Name: ${intern.getName()}</p>
      <p>ID: ${intern.getId()}</p>
      Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
      <p>School: ${intern.getSchool()}</p>
    </div>
    </div>`
    }

    const html = [];

    html.push(team.filter(employee => employee.getRole() === "Manager").map(manager => generateManager(manager)))

    html.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => generateEngineer(engineer)).join(""))

    html.push(team.filter(employee => employee.getRole() === "Intern").map(intern => generateIntern(intern)).join(""))

    return html.join('')




}
module.exports = team => {

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Team Generator</title>
</head>
<body>
  <header class="bg-light jumbotron jumbotron-fluid " style="--bs-bg-opacity: .5;">
  <div class="container">
    <h1 class="display-4 text-center " >My Team</h1>
  </header>
  
  <div class="container bg-light">
  <div class="row align-items-start">
        ${generateHTML(team)}
  </div>
  </div>
  </div>

</body>
</html>`;
}