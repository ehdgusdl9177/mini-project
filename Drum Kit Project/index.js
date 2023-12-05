let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelector("drum")[i].addEventListener("click", handleClick);

  const handleClick = () => {
    alert("I got click!");
  };
}
