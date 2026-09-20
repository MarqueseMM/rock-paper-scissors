let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    options = Math.random();
    if (options >= 0.66) {
        return "rock";
    } else if (options >= 0.33) {
        return "paper";
    } else if (options < 0.33) {
        return "scissors";
    }
}

function getHumanChoice() {
    choice = prompt("Choose rock, paper, or scissors");
    return choice;
}