let hangman = document.getElementById("hangmanimage");
let text = document.getElementById("textarea");
let incorrecttext = document.getElementById("incorrecttext");
let logtext = document.getElementById("log");
let chosenPhrase;
let chosenPhrase2;
let chosenPhraseARRAY;
let chosenPhrase2ARRAY;
let stage;
let paused = false;
let stringOutput = "";

document.getElementById("startbtn").addEventListener("click", start);

hangman.addEventListener("click", clue);

function clue() {
  logtext.innerHTML =
    "The last letter in the phrase is: " +
    chosenPhrase2ARRAY[chosenPhrase2ARRAY.length - 1];
}

function turnArrayToString() {
  stringOutput = "";
  for (let i = 0; i < chosenPhraseARRAY.length; i++) {
    stringOutput += chosenPhraseARRAY[i];
  }
  text.innerHTML = stringOutput;
}

function start() {
  logtext.innerHTML = "";
  paused = false;
  stage = 1;
  updateImage();
  document.getElementById("startbtn").innerHTML = "RESTART";
  let randomSelection = Math.floor(Math.random() * phrases.phrases.length);
  chosenPhrase = phrases.phrases[randomSelection];
  chosenPhrase2 = chosenPhrase;
  chosenPhrase2ARRAY = chosenPhrase2.split("");
  chosenPhrase = chosenPhrase.replace(/[abcdefghijklmnopqrstuvwxyz]/gi, "-");
  chosenPhraseARRAY = chosenPhrase.split("");
  // text.innerHTML = chosenPhraseARRAY;
  turnArrayToString();
  incorrecttext.innerHTML = "Incorrect Guesses: ";

  hangman.style.display = "inline";
}

function isLetter(guess) {
  let objRegExp = /[a-z]/;
  return objRegExp.test(guess);
}

document.addEventListener("keydown", outputKey);

function outputKey(event) {
  if (paused == false) {
    let guess = event.key;
    if (isLetter(guess) === true) {
      for (let i = 0; i < chosenPhrase2ARRAY.length; i++) {
        if (chosenPhrase2ARRAY[i] === guess) {
          chosenPhraseARRAY[i] = guess;
        }
      }
      turnArrayToString();
      log.innerHTML = "";
      let j = chosenPhrase2.indexOf(guess);
      if (j === -1) {
        stage++;
        updateImage();
        incorrecttext.innerHTML += guess + ", ";
      }
    } else {
      log.innerHTML = "This is not a valid input, please try again...";
    }
  }
  let checkCompleted = chosenPhraseARRAY.indexOf("-");
  if (checkCompleted === -1) {
    log.innerHTML =
      "You have correctly guessed the word! It took you " +
      (stage - 1) +
      " wrong guess(es) to complete it.";
    paused = true;
  }
}

function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}

function updateImage() {
  if (stage == 1) {
    hangman.src = "hangman1.png";
  } else if (stage == 2) {
    hangman.src = "hangman2.png";
  } else if (stage == 3) {
    hangman.src = "hangman3.png";
  } else if (stage == 4) {
    hangman.src = "hangman4.png";
  } else if (stage == 5) {
    hangman.src = "hangman5.png";
  } else if (stage == 6) {
    hangman.src = "hangman6.png";
  } else if (stage == 7) {
    hangman.src = "hangman7.png";
  } else if (stage => 8) {
    hangman.src = "hangman8.png";
    logtext.innerHTML = "GAME OVER. Please press 'restart' to try again.";
    paused = true;
    text.innerHTML = chosenPhrase2;
  }
}
