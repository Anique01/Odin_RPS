let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
    return humanChoice;
}

console.log(getComputerChoice());
console.log(getHumanChoice());