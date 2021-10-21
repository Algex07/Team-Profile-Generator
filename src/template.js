const generateHTML = (team) => {


    const generateManager = manager =>{
    return `<div class="card">
      Managers Profiles
      <p>Name: ${manager.getName()}</p>
      <p>ID: ${manager.getId()}</p>
      <p>Email: ${manager.getEmail()}</p>
      <p>Phone number: ${manager.getOfficeNumber()}</p>
    </div>`

    }

    const generateEngineer = engineer => {

    return `<div class="card">
      Engineers Profiles
      <p>Name: ${engineer.getName()}</p>
      <p>ID: ${engineer.getId()}</p>
      <p>Email: ${engineer.getEmail()}</p>
      <p>Github: ${engineer.getGithub()}</p>
    </div>`
    }

    const generateIntern = intern => {
    return `<div class="card">
      Interns Profiles
      <p>Name: ${intern.getName()}</p>
      <p>ID: ${intern.getId()}</p>
      <p>Email: ${intern.getEmail()}</p>
      <p>School: ${intern.getSchool()}</p>
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
  <header class="bg-info jumbotron jumbotron-fluid " style="--bs-bg-opacity: .5;">
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