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

function playRound(humanChoice, getComputerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log{"It's a tie"};
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore += 1;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore += 1;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

console.log(getComputerChoice());
console.log(getHumanChoice());
playRound(humanSelection, computerSelection);