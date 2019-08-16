function changeBackgroundColorToBlue() {
  // No need to change the content of this function. Don't worry if this code is new to you.
  document.body.style.backgroundColor = "blue";
}

function changeBackgroundColorToRed() {
  // No need to change the content of this function. Don't worry if this code is new to you.
  document.body.style.backgroundColor = "red";
}

// I want to store my Event Targets in variables

const redButton = document.querySelector("button.red.button.js-red-button");
const blueButton = document.querySelector("button.blue");

// Add event listeners to each button, using the given functions as Event Handlers

redButton.addEventListener("click", changeBackgroundColorToRed);
blueButton.addEventListener("click", changeBackgroundColorToBlue);

redButton.addEventListener("mouseover", changeBackgroundColorToRed);
