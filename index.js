const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path")
const team = [];

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");

const render = require("./src/template.js");


function mainMenu() {
    inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "Who would you like to add?",
            choices: ["Add Manager", "Add Engineer", "Add Intern", "None, Save and exit!"]
        }
    ]).then(answers => {
        if (answers.memberChoice === "Add Engineer") {
            function createEngineer() {

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
                ]).then(response => {
                    const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub)
                    team.push(engineer)
                    console.log("team", team)
                    console.log(engineer)
                    mainMenu()
                })
            }
            createEngineer()


            // fire off the function to create engineer
        } if (answers.memberChoice === "Add Intern") {
            function createIntern() {

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
                ]).then(response => {
                    const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool)
                    team.push(intern)
                    console.log("team", team)
                    console.log(intern)
                    mainMenu()


                })
            } createIntern()


        } if (answers.memberChoice === "Add Manager") {
            function createManager() {

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
                ]).then(response => {
                    const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber)
                    team.push(manager)
                    console.log("team", team)
                    console.log(manager)
                    mainMenu()




                })

            }

            createManager()

        } if (answers.memberChoice === "None, Save and exit!") {

            if (!fs.existsSync(OUTPUT_DIR)) {
                fs.mkdirSync(OUTPUT_DIR)
            }
            fs.writeFileSync(outputPath, render(team))


        }





    })
}





mainMenu()




