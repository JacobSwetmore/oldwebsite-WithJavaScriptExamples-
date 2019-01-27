let randomNumber = Math.floor(Math.random() * 100) + 1;
let count = 0;

document.getElementById("guessButton").addEventListener("click", yourGuess)
document.getElementById("resetButton").addEventListener("click", reset)

function reset() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    count = 0;
    output.value = " ";
    output.style.backgroundColor = "white";
}


function yourGuess() {
    userGuess = document.getElementById("guess").value;
    output = document.getElementById("output");

    if (userGuess == randomNumber) {
        count = count + 1;
        output.value = "\r" + "You guessed correctly!" + "\r" + " " + "\r" + "It took you " + count + " guess(es)" + "\r" + " " + "\r" + "the number was " + randomNumber;
        output.style.backgroundColor = "#69F0AE";

    } else if (userGuess > randomNumber) {
        count = count + 1;
        output.value = "\r" + "Your guess is too high!" + "\r" + " " + "\r" + "so far you have had " + count + " guess(es)" + "\r" + " " + "\r" + "Have another guess" + "\r";

        if ((userGuess - randomNumber) <= 10) {
            output.style.backgroundColor = "#D32F2F";
        }
        else if ((userGuess - randomNumber) > 10 && (userGuess - randomNumber) <= 30) {
            output.style.backgroundColor = "#61cfd4";
        }
        else {
            output.style.backgroundColor = "white";
        }

    } else {
        count = count + 1;
        output.value = output.value + "\r" + "Your guess is too low!" + "\r" + " " + "\r" + "so far you have had " + count + " guess(es)" + "\r" + " " + "\r" + "Have another guess" + "\r";

        if ((randomNumber - userGuess) <= 10) {
            output.style.backgroundColor = "#D32F2F";
        }
        else if ((randomNumber - userGuess) > 10 && (randomNumber - userGuess) <= 30) {
            output.style.backgroundColor = "white";
        }
        else {
            output.style.backgroundColor = "rgba(97, 207, 212, 1)";
        }
    }
}
