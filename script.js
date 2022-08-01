/**
@author Kolby Lalonde
version: 1.3
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

/* playRound() - Is a function that logically decides the result win, lose or tie of a round
and returns a result statment. */
function playRound(player){

    var computer = getComputerChoice();

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

/* resultFinder() - Is a helper function that determines from the result string
whether player has won lost or tied the round.
*/
function resultFinder(result) {
    if(result.charAt(0) === "T"){
        return "Tie";
    }
    else if (result.charAt(4) === "L"){
        computerScore++;
        return "Lose";
    }
    else if (result.charAt(4) === "W"){
        playerScore++;
        return "Win";
    }
}

/* startRoundRock() - Is the function called when the user selects the rock
button. It then upadates the page with the results for that round.
*/
function startRoundRock() {
    if(playerScore === 5 || computerScore === 5){
        return
    }
    let result = playRound("rock");
    let update = resultFinder(result);
    display.textContent = "Round result: " + result;
    if (update === "Win"){
        player.textContent = "Player score: " + playerScore;
        if(playerScore === 5){
            outcome.textContent = "Player WINS!";
            refresh.textContent = "Refresh page to play again :)";
        }
    }
    else if (update === "Lose"){
        computer.textContent = "Computer score: " + computerScore;
        if(computerScore === 5){
            outcome.textContent = "Computer WINS!";
            refresh.textContent = "Refresh page to play again :)";
        }
    }
}

/* startRoundPaper() - Is the function called when the user selects the paper
button. It then upadates the page with the results for that round.
*/
function startRoundPaper() {
    if(playerScore === 5 || computerScore === 5){
        return
    }
    let result = playRound("paper");
    let update = resultFinder(result);
    display.textContent = "Round result: " + result;
    if (update === "Win"){
        player.textContent = "Player score: " + playerScore;
        if(playerScore === 5){
            outcome.textContent = "Player WINS!";
            refresh.textContent = "Refresh page to play again :)";
        }
    }
    else if (update === "Lose"){
        computer.textContent = "Computer score: " + computerScore;
        if(computerScore === 5){
            outcome.textContent = "Computer WINS!";
            refresh.textContent = "Refresh page to play again :)";
        }
    }
}

/* startRoundScissors() - Is the function called when the user selects the scissors
button. It then upadates the page with the results for that round.
*/
function startRoundScissors() {
    if(playerScore === 5 || computerScore === 5){
        return
    }
    let result = playRound("scissors");
    let update = resultFinder(result);
    display.textContent = "Round result: " + result;
    if (update === "Win"){
        player.textContent = "Player score: " + playerScore;
        if(playerScore === 5){
            outcome.textContent = "Player WINS!";
            refresh.textContent = "Refresh page to play again :)";
        }
    }
    else if (update === "Lose"){
        computer.textContent = "Computer score: " + computerScore;
        if(computerScore === 5){
            outcome.textContent = "Computer WINS!";
            refresh.textContent = "Refresh page to play again :)";
        }
    }
}

// Creating DOM Elements
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

// Attaching eventlisteners to buttons
rockButton.addEventListener("click", startRoundRock);
paperButton.addEventListener("click", startRoundPaper);
scissorsButton.addEventListener("click", startRoundScissors);

const container = document.querySelector('#container');

// Creating score variables
let playerScore = 0;
let computerScore = 0;

// Initial page setup
const display = document.createElement('div');
display.classList.add('div');
display.textContent = "Round result: ";

const player = document.createElement('div');
player.classList.add('div');
player.textContent = "Player score: " + playerScore;

const computer = document.createElement('div');
computer.classList.add('div');
computer.textContent = "Computer Score: " + computerScore;

const outcome = document.createElement('div');
outcome.classList.add('div');

// Adding three elements to the container
container.appendChild(display);
container.appendChild(player);
container.appendChild(computer);

const outcometext = document.querySelector('#outcometext');
const refresh = document.querySelector('#refresh');

// Adding the outcome elements
outcometext.appendChild(outcome);
refresh.appendChild(refresh);

