alert("Welcome to the Number Guess Game")
//Prompt user for username 
let userName = prompt("what is your name? ");
//display username
console.log(`Welcome ${userName}`);

// program where the user has to guess a number generated by a program between 1 and 2
// set upperlimit as 2
let upperLimit = 2;


//1. computer guesses a number between 1 and upperlimit
levelLoop:
for (let upperLimit = 2; upperLimit < 10; upperLimit++) {
  let computerGuess = Math.floor(Math.random() * upperLimit) + 1;


  for (let i = 1; i <= 3; i++) {
    //2. user guesses a number between 1 and upperlimit
    let userGuess = parseInt(prompt(`Guess a number between 1 and ${upperLimit} `));

    //3a. if user guess == computer guess, move to next level
    if (userGuess == computerGuess) {
      console.log("Correct! Welcome to the next level.")
      continue levelLoop; 
    }

    //3b. if user guess !== computer guess, show an error msg to try again
    else {
      
      if (i < 3) {
        console.log("Try again")
      }
    }
    // Game continues - answer wrong
    // back to 2 (loop 3 times)
  }

  //Getting to this  point means we've tried three times and the guess wasn't correct
  console.log(`Game over: The correct number was ${computerGuess}`)
  break

  
}


