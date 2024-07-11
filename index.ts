#! /usr/bin/env node
import inquirer from "inquirer";

let todo = [];
let condition = true;
while (condition) {
  let todoquestion = await inquirer.prompt([
    {
      name: "Q1",
      type: "input",
      message: "What would you like to add in todos?",
    //   default: "",
    },
    {
      name: "Q2",
      type: "confirm",
      message: "would you like to add another one?",
      default: true,
    },
  ]);
  if (todoquestion.Q1 === "" ) {
    console.log("please enter something");
  } else {
    todo.push(todoquestion.Q1);
    condition = todoquestion.Q2;
    console.log(todo);
  }

  
}
