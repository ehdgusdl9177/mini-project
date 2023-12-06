let buttonColurs = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
$(".btn").click(function () {
  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
});

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColurs[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  let audio = new Audio(`sounds/${randomChosenColour}.mp3`);
  audio.play();
}
