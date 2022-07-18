/**
@author Kolby Lalonde
version: 1.0
since: 1.0
*/


// Rock Paper Scissors Game Script


/* getComputerChoice - Is a function that generates a random number
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

// 3 function tests
console.log(getComputerChoice())

console.log(getComputerChoice())

console.log(getComputerChoice())


