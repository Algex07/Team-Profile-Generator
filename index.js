const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const fs = require("fs");
const team = [];

const generateHTML = (answers) =>
`<!DOCTYPE html>
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
    <div class="col">
      Managers Profiles
      <ul class="list-group">
      <li class="list-group-item">Name: ${answers.managerName}</li>
      <li class="list-group-item">ID: ${answers.managerId}</li>
      <li class="list-group-item">Email: ${answers.managerEmail}</li>
      <li class="list-group-item">Phone number: ${answers.managerOfficeNumber}</li>
    </ul>
    </div>
    <div class="col">
      Engineers Profiles
      <ul class="list-group">
      <li class="list-group-item">Name: ${answers.engineerName}</li>
      <li class="list-group-item">ID: ${answers.engineerId}</li>
      <li class="list-group-item">Email: ${answers.engineerEmail}</li>
      <li class="list-group-item">LinkedIn:Github: ${answers.engineerGithub}</li>
    </ul>
    </div>
    <div class="col">
      Interns Profiles
      <ul class="list-group">
      <li class="list-group-item">Name: ${answers.internName}</li>
      <li class="list-group-item">ID: ${answers.internId}</li>
      <li class="list-group-item">Email: ${answers.internEmail}</li>
      <li class="list-group-item">School: ${answers.internSchool}</li>
    </ul>
    </div>
  </div>
</div>
</body>
</html>`;



function mainMenu(){
    inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "Who would you like to add?",
            choices: ["Add Engineer", "Add Intern,", "Add Manager", "None, Save and exit!"]
        }
    ]).then(answers =>{
        if(answers.memberChoice === "Add Engineer"){ function createEngineer(){

            inquirer.prompt([
                {
                    type: "input",
                    name: "engineerName",
                    message: "What is the team engineer's name?"
                },
                {
                    type: "input",
                    name: "engineerId",
                    message: "What is the team engineer's Id?"
                },
                {
                    type: "input",
                    name: "engineerEmail",
                    message: "What is the team engineer's email?"
                },
                {
                    type: "input",
                    name: "engineerGithub",
                    message: "What is the team engineer's Github?"
                },
            ]).then(answers =>{
                const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
                team.push(engineer)
                console.log("team", team)
                console.log(engineer)
                mainMenu()
            }) 
        }
        createEngineer()
             
             
                // fire off the function to create engineer
            }if(answers.memberChoice === "Add Intern,")
            { function createIntern(){

                inquirer.prompt([
                    {
                        type: "input",
                        name: "internName",
                        message: "What is the team intern's name?"
                    },
                    {
                        type: "input",
                        name: "internId",
                        message: "What is the team intern's Id?"
                    },
                    {
                        type: "input",
                        name: "internEmail",
                        message: "What is the team intern's email?"
                    },
                    {
                        type: "input",
                        name: "internSchool",
                        message: "What is the team intern's school?"
                    },
                ]).then(answers =>{
                    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
                    team.push(intern)
                    console.log("team", team)
                    console.log(intern)
                    mainMenu()
                
                   
            })
        }createIntern()
                

            }if (answers.memberChoice === "Add Manager") {
                function createManager(){

                    inquirer.prompt([
                        {
                            type: "input",
                            name: "managerName",
                            message: "What is the team manager's name?"
                        },
                        {
                            type: "input",
                            name: "managerId",
                            message: "What is the team manager's Id?"
                        },
                        {
                            type: "input",
                            name: "managerEmail",
                            message: "What is the team manager's email?"
                        },
                        {
                            type: "input",
                            name: "managerOfficeNumber",
                            message: "What is the team manager's office number?"
                        },
                    ]).then(answers =>{
                        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
                        team.push(manager)
                        console.log("team", team)
                        console.log(manager)
                        mainMenu()
                    
                      
                          
            
                    })
                    
                }
                
                createManager()
               
            } else (answers.memberChoice === "None, Save and exit!"); {function createTeam(){
                   
                ((answers) => {
                    const htmlPageContent = generateHTML(answers);
                
                    fs.writeFile('index.html', htmlPageContent, (err) =>
                      err ? console.log(err) : console.log('Successfully created index.html!')
                    );
                  });
                
            } 

            }
            
            createTeam()
            
            
        })   
    
}
           
    

   


    mainMenu()

    
  
 
