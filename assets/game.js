// // Wrap every letter in a span
// var textWrapper = document.querySelector(".ml6 .letters");
// textWrapper.innerHTML = textWrapper.textContent.replace(
//   /([^\x00-\x80]|\w)/g,
//   "<span class='letter'>$&</span>"
// );

// anime
//   .timeline({ loop: true })
//   .add({
//     targets: ".ml6 .letter",
//     translateY: ["1.1em", 0],
//     translateZ: 0,
//     duration: 750,
//     delay: function(el, i) {
//       return 50 * i;
//     }
//   })
//   .add({
//     targets: ".ml6",
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });

const letter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

let win = 0;
let lose = 0;
let wrongGuesses = 8;
let computerGuess = getLetter();
let guessList = "";

document.addEventListener("keyup", function(event) {
  const playerGuess = event.key;

  // console.log(playerGuess);
  // console.log(computerGuess());
  console.log(playerGuess);
  if (playerGuess === computerGuess) {
    win++;
    wrongGuesses = 8;
    computerGuess = getLetter();
    document.getElementById("guessLeft").innerHTML = wrongGuesses;

    console.log("win: ", win);
    // console.log(document.getElementById("win"));
    document.getElementById("win").innerHTML = win;
    guessList = "";
    document.getElementById("guessList").innerHTML = guessList;
  } else if (wrongGuesses === 0) {
    lose++;
    wrongGuesses = 8;
    computerGuess = getLetter();
    guessList = "";
    document.getElementById("guessList").innerHTML = guessList;
    // console.log(document.getElementById("lose"));
    document.getElementById("lose").innerHTML = lose;
  } else {
    wrongGuesses--;
    document.getElementById("guessLeft").innerHTML = wrongGuesses;
    console.log("lose: ", wrongGuesses);
    guessList += playerGuess + ", ";
    document.getElementById("guessList").innerHTML = guessList;
  }
});
// computer will guess a letter immediately after player guesses.
function getLetter() {
  return letter[Math.floor(Math.random() * Math.floor(letter.length - 1))];
}

// update dom for user

// update dom for user

// document.addEventListener("keydown", function(event) {
//   console.log(event.key);
//   if (computerLetter === event.key) {
//     alert("Hey buddy, you win!");
//     // increment wins
//     wins++;
//     // update dom for user
//     document.getElementById("wins").innerHTML = wins;
//   } else {
//     alert("Hey pa, you loose!");
//     // increment losses
//     // update dom for user
//   }
// });
