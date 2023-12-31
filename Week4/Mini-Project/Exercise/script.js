function playTheGame() {
 
    let wantsToPlay = confirm("Would you like to play the game?");
    
  
    if (!wantsToPlay) {
      alert("No problem, Goodbye.");
      return;
    }
    
    let userNumber = prompt("Enter a number between 0 and 10:");
    
    
    if (isNaN(userNumber)) {
      alert("Sorry Not a number, Goodbye.");
      return;
    }
    

    if (userNumber < 0 || userNumber > 10) {
      alert("Sorry it’s not a good number, Goodbye.");
      return;
    }
    
   
    let computerNumber = Math.round(Math.random() * 10);
  
   
    compareNumbers(userNumber, computerNumber);
  }
  
  function compareNumbers(userNumber, computerNumber) {
    let numberOfGuesses = 0;
    
    while (numberOfGuesses < 3) {
      
      if (userNumber == computerNumber) {
        alert("WINNER");
        return;
      }
      else {
       
        if (userNumber > computerNumber) {
          userNumber = prompt("Your number is bigger than the computer’s, guess again");
        }
        
        else {
          userNumber = prompt("Your number is smaller than the computer’s, guess again");
        }
        
        // Increment the number of guesses
        numberOfGuesses++;
        
        // If the user guessed more than 3 times, exit the function
        if (numberOfGuesses >= 3) {
          alert("Out of chances");
          return;
        }
      }
    }
  }

