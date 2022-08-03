function runGame() {
    let target = Math.floor((Math.random() * 100) + 1);
    let guessString = '';
    let guessNumber = 0;
    let numTries = 0;
    do {
        guessString = prompt ("Guess a number 1 - 100");
        if (guessString == null) { return }
        numTries += 1;
        guessNumber = +guessString;
        correct = checkGuess(guessNumber, target);
    } while (!correct);
    alert("Congratulations, you won the game! It only took you " + numTries +" tries.");
}
function checkGuess(guessNumber, target) {
    let correct = false;
    if(isNaN(guessNumber)) {
        alert ("You did not input a number. Don't be dumb.");
    } else if ((guessNumber < 1) || (guessNumber > 100)) {
        alert ("Are you on crack? Guess a number between 1 and 100.")
    } else if (guessNumber < target) {
        alert ("Nope, guess higher!");
    } else if (guessNumber > target) {
        alert ("Nope, guess lower!");
    } else { correct = true; }
    return correct;
}