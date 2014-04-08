var randomNumber;
var previousDiff;
var sentGuessAlready = false;
var userWon = false;

// Set random number and log it to console

randomNumber = Math.floor((Math.random()*100)+1);
console.log("The secret number is " + randomNumber);

// Make sure user entered a number

function validateInput() {
	var guess = document.getElementById('guess').value;
	if (guess === "" || isNaN(guess)) {
		document.getElementById('alerts').innerHTML="Please enter a number.";
		document.getElementById('guess').value = "";
	} else if (guess < 1 || guess > 100) {
		document.getElementById('alerts').innerHTML="Your number must be between 1 and 100.";
		document.getElementById('guess').value = "";
	} else {
		checkGuess();
	}
}

// See if the guess is right 
// If guess is wrong, give feedback about whether it's a closer guess than the last one

function checkGuess() {
	document.getElementById('alerts').innerHTML="";
	var guess = document.getElementById('guess').value;
	console.log("The user's guess is " + guess);

	var difference = Math.abs(randomNumber - guess);
	console.log("The user is off by " + difference);

	if (difference === 0) {
		document.getElementById('alerts').innerHTML="You got it! Congratulations. New game?";
		sentGuessAlready = true;
		userWon = true;
	}

	if (sentGuessAlready === false) {
		if (difference <= 30) {
			document.getElementById('alerts').innerHTML="Your guess is hot. Guess again!";
		} else {
			document.getElementById('alerts').innerHTML="Your guess is cold. Guess again!";
		}
	}

	console.log("Last guess, the user was off by " + previousDiff);

	if (!userWon) {
		if (previousDiff !== undefined) {
			if (difference > previousDiff) {
				document.getElementById('alerts').innerHTML="You're getting colder. Guess again!";
			} else if (difference < previousDiff) {
				document.getElementById('alerts').innerHTML="You're getting warmer. Guess again!";
			} else if (previousDiff == difference) {
				document.getElementById('alerts').innerHTML="You guessed the same. Guess again!";
			} else {
				document.getElementById('alerts').innerHTML="You got it!";
			}
		}
	} 

	previousDiff = difference;
	sentGuessAlready = true;

}

// Reset variables and start new game

function newGame() {
	randomNumber = Math.floor((Math.random()*100)+1);
	console.log("The new secret number is " + randomNumber);
	document.getElementById('guess').value = "";
	document.getElementById('alerts').innerHTML="New secret number generated. Start guessing!";
	userWon = false;
	sentGuessAlready = false;
	previousDiff = undefined;
	difference = undefined;
}