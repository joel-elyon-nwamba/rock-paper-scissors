// Global variables
const rocks = "rock";
const papers = "paper";
const scissors = "scissors";

// Score variables
let humanScore = 0;
let computerScore = 0;

// Get the computer's choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return rocks;
    } else if (randomNumber === 1) {
        return papers;
    } else {
        return scissors;
    }
}

// Get the human's choice
function getHumanChoice() {
    let userPrompt = prompt("Select rock, paper, or scissors").toLowerCase();
    while (![rocks, papers, scissors].includes(userPrompt)) {
        userPrompt = prompt("Invalid choice. Please select rock, paper, or scissors").toLowerCase();
    }
    return userPrompt;
}

// Playing a round
function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return "tie";
    } else if (
        (humanChoice === rocks && computerChoice === scissors) ||
        (humanChoice === papers && computerChoice === rocks) ||
        (humanChoice === scissors && computerChoice === papers)
    ) {
        console.log("You win this round!");
        humanScore++;
        return "human";
    } else {
        console.log("Computer wins this round!");
        computerScore++;
        return "computer";
    }
}

// Run the game
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);

console.log(`Scores - Human: ${humanScore}, Computer: ${computerScore}`);