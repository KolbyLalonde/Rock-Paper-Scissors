/**
@author Kolby Lalonde
version: 1.1
since: 1.0
*/


// Rock Paper Scissors Game Script


/* getComputerChoice() - Is a function that generates a random number
between 1 and 3. Then returns Rock if the num is 1, Paper if the number is 2
or Scissors if the number is 3. */

function getComputerChoice(){
    let num = Math.floor((Math.random() * 3) + 1); // Generate number 1-3

    // Select appropriate string choice
    if (num === 1){
        return "Rock";
    }
    else if (num === 2){
        return "Paper";
    }
    else if (num === 3){
        return "Scissors"
    }
}

/* getPlayerChoice() - Is a function that prompts the user to type in their
decision of rock, paper or scissors and returns the string the input. */

function getPlayerChoice(){
    let pick = prompt("Please choose rock, paper or scissors: ", "")
    return pick;
}

/* playRound() - Is a function that logically decides the result win, lose or tie of a round
and returns a result statment. */

function playRound(computer, player){

    // Checks all possible scenarios of the game and returns Error if inccorect strings provided
    if ( computer.toLowerCase() === player.toLowerCase()){
        return "Tie! Both selected " + player.toLowerCase();
    }
    else if (computer.toLowerCase() === "rock" && player.toLowerCase() === "scissors"){
        return "You Lose! Rock beats Scissors";
    }
    else if (computer.toLowerCase() === "paper" && player.toLowerCase() === "rock"){
        return "You Lose! Paper beats Rock";
    }
    else if (computer.toLowerCase() === "scissors" && player.toLowerCase() === "paper"){
        return "You Lose! Scissors beats Paper";
    }
    else if (computer.toLowerCase() === "rock" && player.toLowerCase() === "paper"){
        return "You Win! Paper beats Rock";
    }
    else if (computer.toLowerCase() === "scissors" && player.toLowerCase() === "rock"){
        return "You Win! Rock beats Scissors";
    }
    else if (computer.toLowerCase() === "paper" && player.toLowerCase() === "scissors"){
        return "You Win! Scissors beats Paper";
    }
    else{
        return "Error";
    }
}

/* game - sets up a 5 round game between the player and computer. Each round
will prompt the user for their choice and results/updated scores recored to console after each round.
Finally once all 5 rounds are completed the result of the game is logged in the console. */

function game(){

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        let result = playRound(getComputerChoice(), getPlayerChoice())
        if(result.charAt(0) === "T"){
            console.log("Round " + (i + 1) + ": " + result)
        }
        else if (result.charAt(4) === "L"){
            computerScore++;
            console.log("Round " + (i + 1) + ": " + result)
        }
        else if (result.charAt(4) === "W"){
            playerScore++;
            console.log("Round " + (i + 1) + ": " + result)
        }
        else {
            console.log("Error occured round " + (i + 1))
        }
        console.log("Player: " + playerScore + "    Computer: " + computerScore)
    }

    if( playerScore === computerScore){
        return "After 5 rounds the game ended in a tie";
    }
    else if ( playerScore > computerScore){
        return "Player Wins!";
    }
    else {
        return "Computer Wins!";
    }
}

// Testing the game
console.log(game())
