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

document.addEventListener("keyup", function(event) {
  const playerGuess = event.key;
  // console.log(playerGuess);
  // console.log(computerGuess());
  if (playerGuess === computerGuess) {
    win++;
    wrongGuesses = 8;
    console.log("win: ", win);
  } else if (wrongGuesses === 0) {
    lose++;
    wrongGuesses = 8;
  } else {
    wrongGuesses--;
    console.log("lose: ", lose);
  }
});
// computer will guess a letter immediately after player guesses.
function getLetter() {
  return letter[Math.floor(Math.random() * Math.floor(letter.length - 1))];
}

// update dom for user
// console.log(document.getElementById("wins"));
// document.getElementById("wins").innerHTML = wins;

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
