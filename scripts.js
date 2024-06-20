function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);

    if (number === 0) {
        console.log("C0mput3rs race: rock")
        return "rock";
    } else if (number === 1) {
        console.log("C0mput3rs race: paper")
        return "paper";
    } else if (number === 2) {
        console.log("C0mput3rs race: scissors")
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Paper, Rock or Scissors?");
    choice = choice.toLowerCase();

    if (choice === "rock") {
        console.log("Human race: rock")
        return "rock";
    } else if (choice === "paper") {
        console.log("Human race: paper")
        return "paper";
    } else if (choice === "scissors") {
        console.log("Human race: scissors")
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("Human wins! " + humanChoice + " beats " + computerChoice + "\nPoint to human race");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("Human wins! " + humanChoice + " beats " + computerChoice + "\nPoint to human race");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("Human wins! " + humanChoice + " beats " + computerChoice + "\nPoint to human race");
        humanScore++;
    } else if (humanChoice == computerChoice) {
        console.log("Draw! " + "\nNo points were awarded");
    } else {
        console.log("C0mput3rs race wins! " + computerChoice + " beats " + humanChoice + "\nPoint to c0mput3rs race");
        computerScore++;
    }
    console.log(humanScore, computerScore)
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("Human race wins tournament")
    }

    else if (humanScore === computerScore) {
        console.log("DRAW!!!")
    }

    else {
        console.log("C0mput3rs race wins tournament")
    }
}

playGame();