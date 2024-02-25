function getComputerChoice(){
    return(options[Math.floor(Math.random()*options.length)])
}

function getPlayerChoice(){
    let i = 0;
    while (i == 0) {
    const askUserInput = prompt("Choose between Rock, Paper, and Scissors")
    askUser = askUserInput.toLowerCase()
    
    if (options.includes(askUser)){
        return askUser
        i++;
    }
    else {
        console.log("Incorrect input, please try again.")
    }
}
}

function playGame(){
    
}

const options = ["rock","paper","scissors"]

// const computerSelection = getComputerChoice()
// const playerSelection = getPlayerChoice()

console.log(getPlayerChoice())