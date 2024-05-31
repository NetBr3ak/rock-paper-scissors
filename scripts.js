function randomNumberGenerator() {
    return Math.floor(Math.random() * 3);
}

function realComputerDecision(number) {
    const decisions = ["Rock!", "Paper!", "Scissors!"];
    return decisions[number];
}

let number = randomNumberGenerator();
console.log(number);

let decision = realComputerDecision(number);
console.log(decision);