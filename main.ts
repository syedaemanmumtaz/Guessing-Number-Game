#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 8 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber ",
        type: "number",
        message: "Please guess a number between 1-8:",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congtratulations! you guessed right number.");
} else {
    console.log("You guessed wrong number");
}