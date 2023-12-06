let buttonColurs = ["red", "blue", "green", "yellow"];
let gamePattern = [];

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColurs[randomNumber];
  gamePattern.push(randomChosenColour);
}
