const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const fs = require("fs");
const team = [];



function mainMenu(){
    inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "Who would you like to do?",
            choices: ["Add Engineer", "Add Intern,", "Add Manager", "Quit"]
        }
    ]).then(answers =>{
        if(answers.memberChoice === "Add Engineer"){ 
            function createEngineer()      
             console.log (createEngineer)
                // fire off the function to create engineer
            }if(answers.memberChoice === "Add Intern,")
            { createIntern()
                console.log(createIntern)

            }if (answers.memberChoice === "Add Manager") {
                createManager()
                console.log(createManager)
            } else (answers.memberChoice === "Quit") 
            createTeam
        })   
    
}
           
         
    

   
function createTeam(){

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

    
} 


function createEngineer(){

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
            message: "What is the team engineer's github username?"
        },
    ]).then(answers =>{
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github)
        team.push(engineer)
        console.log("team", team)
        console.log(engineer)
        mainMenu()
    }) 
}
createEngineer()



function createIntern(){

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
            message: "What is the team intern's school name?"
        },
    ]).then(answers =>{
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
        team.push(intern)
        console.log("team", team)
        console.log(intern)
        mainMenu()
    })
}   
createIntern()
    
            


    


mainMenu()

    
  
 
