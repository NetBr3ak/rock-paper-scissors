function getComputerChoice() {

    let number = Math.floor(Math.random() * 3);

    if (number == 0) {
        console.log("Computer: Rock!")
    }

    else if (number == 1) {
        console.log("Computer: Paper!")
    }

    else {
        console.log("Computer: Scissors!")
    }
}

function getHumanChoice() {
    let choice = prompt("Paper, Rock or Scissors?")

    if (choice.toLocaleLowerCase() === "rock") {
        console.log("Human: Rock!")
    }

    else if (choice.toLocaleLowerCase() === "paper") {
        console.log("Human: Paper!")
    }

    else if (choice.toLocaleLowerCase() === "scissors") {
        console.log("Human: Scissors!")
    }

    else {
        console.log("Invalid choice!")
    }
}
getHumanChoice()
console.log(getComputerChoice());