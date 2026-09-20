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