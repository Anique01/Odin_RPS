function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        
        console.log(`Current score - You: ${humanScore} | Computer: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie!");
    }
}

function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
    return humanChoice;
}


playGame();
