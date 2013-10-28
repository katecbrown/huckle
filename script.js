var randomNumber;
var previousDiff;

randomNumber = Math.floor((Math.random()*100)+1);
console.log("The random number is " + randomNumber);

function validateInput() {
	var guess = document.getElementById('guess').value;
	if (guess == "" || isNaN(guess)) {
		alert ("You must enter a number.");
		document.getElementById("guess").value = "";
	} else {
		checkGuess(guess);
	}
}

function checkGuess() {
	console.log("reached checkGuess function");
	var guess = document.getElementById('guess').value;
	console.log("The user's guess is " + guess);

	var difference = Math.abs(randomNumber - guess);
	console.log("the difference is " + difference);

	if (difference == 0) {
		alert("You got it! Congratulations.");
	} else if (difference <= 30) {
		alert("Your guess is hot. Guess again!");
	} else {
		alert("Your guess is cold. Guess again!");
	}

	console.log("previousDiff is set to " + previousDiff);

	if (previousDiff != undefined) {
		if (difference > previousDiff) {
			alert ("You're getting colder. Guess again!");
		} else if (difference < previousDiff) {
			alert ("You're getting warmer. Guess again!");
		} else if (previousDiff == difference) {
			alert ("You guessed the same. Guess again!");
		} else {
			alert ("You got it!")
		}
	}

	previousDiff = difference;

}

function newGame() {
	randomNumber = Math.floor((Math.random()*100)+1);
	console.log("The new random number is " + randomNumber);
	document.getElementById("guess").value = "";
}