var randomNumber;
var previousGuess;
// var currentDiff;
// var previousDiff;

randomNumber = Math.floor((Math.random()*100)+1);
console.log(randomNumber);

function checkGuess() {
	console.log("reached checkGuess function");
	var guess = document.getElementById('guess').value;
	console.log("The user's guess is " + guess);
	if (randomNumber == guess) {
		alert("You got it!");
	} else {
		alert("Wrong! Guess again.");
	} 	

	console.log("previousGuess is set to " + previousGuess);

	if (previousGuess != undefined) {
		if (guess > previousGuess) {
			alert ("You guessed higher");
		} else if (guess < previousGuess) {
			alert ("You guessed lower");
		} else {
			alert ("You guessed the same");
		}
	}

	previousGuess = guess;

}