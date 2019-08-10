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

//  $(document).ready(function() {
//         Here we are provided an initial array of letters.
//         Use this array to set the alphabet that the computer and the player will guess.
//         constters = [
//           "A",
//           "B",
//           "C",
//           "D",
//           "E",
//           "F",
//           "G",
//           "H",
//           "I",
//           "J",
//           "K",
//           "L",
//           "M",
//           "N",
//           "O",
//           "P",
//           "Q",
//           "R",
//           "S",
//           "T",
//           "U",
//           "V",
//           "W",
//           "X",
//           "Y",
//           "Z",
//         ];

// Creating an array of letters.
//  const letters = ["A", "B", "C", "D"...];

// Looping through each item in the array and logging a message to the console.

//  for (let i = 0; i < letters.length; i++) {
//    console.log(letters);
//  }

// Create the code that will prompt the computer to guess any of the 26 letters after player presses a key

// list letters in array

// eventListener keyPress

// Math.floor(x)

// randomly choose letter (computer)

// listen to keydown

// check keydown key against the computer

// store wins and losses
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
let wrongGuesses = 0;

let computerGuess = getLetter();

document.addEventListener("keyup", function(event) {
  const playerGuess = event.key;
  // console.log(playerGuess);
  // console.log(computerGuess());
  if (playerGuess === computerGuess) {
    win++;
    console.log("win: ", win);
  } else {
    wrongGuesses++;
    console.log("lose: ", lose);
  }
});
// computer will guess a letter immediately after player guesses.
function getLetter() {
  return letter[Math.floor(Math.random() * Math.floor(letter.length - 1))];
}

// 8 guesses are allowed.
// losses are counted when 8 guesses are incorrect and wins are counted anytime a guess is correct before guesses run out.
// allow to refresh.

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
