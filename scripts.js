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

function checkWinner(computer, player){
    // ROCK  v SCISSORS --> ROCK
    // ROCK  v PAPER    --> PAPER
    // PAPER v SCISSORS --> SCISSORS
    // TIE   v TIE      --> TIE
    if (computer == "rock" && player == "scissors"){
        return("C")
    }
    else if (computer == "rock" && player == "paper"){
        return("P")
    }
    else if (computer == "paper" && player == "scissors"){
        return ("P")
    }
    else if (computer == "scissors" && player == "rock"){
        return ("P")
    }
    else if (computer == "paper" && player == "rock"){
        return ("C")
    }
    else if (computer == "scissors" && player == "paper"){
        return ("C")
    }
    else if (computer == player){
        return ("T")
    }
}
function playGame(){
    let ComputerScore = 0;
    let PlayerScore = 0;
    while (ComputerScore < 5 && PlayerScore < 5){
        if (checkWinner(getComputerChoice(),getPlayerChoice()) == "C"){
            console.log("C")
            ComputerScore++
        }
        else if (checkWinner(getComputerChoice(),getPlayerChoice()) == "P"){
            console.log("P")
            PlayerScore++
        }
        else {
            console.log("T")
            continue
        }
        console.log(`Current score is ${ComputerScore} for computer and ${PlayerScore} for player.`)
    }
    if (ComputerScore == 5){
        console.log("Computer wins!")
    }
    else if (PlayerScore == 5){
        console.log("Player wins!")
    }
}

const options = ["rock","paper","scissors"]


// const computerSelection = getComputerChoice()
// const playerSelection = getPlayerChoice()

console.log(playGame())