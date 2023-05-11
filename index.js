// Detect mouse click press
var noOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    makeSounds(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

//Detect keyboard's key press
document.addEventListener("keydown", function (event) {
  makeSounds(event.key);
  buttonAnimation(event.key);
});

function makeSounds(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kichbass = new Audio("sounds/kick-bass.mp3");
      kichbass.play();
      break;
    default:
      console.log("Key not matched...");
      break;
  }
}

function buttonAnimation(buttonKey) {
  document.querySelector(`.${buttonKey}`).classList.add("pressed");
  setTimeout(function () {
    document.querySelector(`.${buttonKey}`).classList.remove("pressed");
  }, 100);
}
