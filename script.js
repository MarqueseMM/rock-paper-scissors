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

function playRound(humanChoice, computerChoice) {
    const choice1 = humanChoice.toLowerCase()
    const choice2 = computerChoice

    if (choice1 === 'paper' && choice2 === 'rock') {
        console.log('You win! Paper beats Rock');
        return ++humanScore;
    } else if (choice1 === 'rock' && choice2 === 'scissors') {
        console.log('You win! Rock beats Scissors')
        return ++humanScore
    } else if (choice1 === 'scissors' && choice2 === 'paper') {
        console.log('You win! Scissors beats Paper')
        return ++humanScore
    } else if (choice1 === choice2) {
        console.log('It\'s a tie')
    } else {
        console.log('You lose! ' + choice2 + ' beats ' + choice1)
        return ++computerScore
    }
}

const humanSelction = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelction, computerSelection);