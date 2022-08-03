var drumButtonsCount = document.querySelectorAll(".drum").length;
for(i=0; i<drumButtonsCount; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
document.addEventListener("keydown", (event) => handleKeyDown(event));
/************************************************/
function handleClick(){
  var buttonName = this.innerHTML;
  switchButtonName(buttonName);
  buttonAnimation(buttonName);
}
function handleKeyDown(event){
  var buttonName = event.key;
  switchButtonName(buttonName);
  buttonAnimation(buttonName);
}
/************************************************/
function playSound(path){
  var audio = new Audio(path);
  audio.play();
}

function switchButtonName(buttonName){
  switch (buttonName) {
    case "q":
      playSound("sounds/tom-1.mp3")
      break;
    case "w":
      playSound("sounds/tom-2.mp3")
      break;
    case "e":
      playSound("sounds/tom-3.mp3")
      break;

    case "r":
      playSound("sounds/tom-4.mp3")
      break;

    case "i":
      playSound("sounds/crash.mp3")
      break;

    case "o":
      playSound("sounds/kick-bass.mp3")
      break;

    case "p":
      playSound("sounds/snare.mp3")
      break;
  
    default:
      console.log(buttonName);
  }
}

function buttonAnimation(buttonName){
  var currentButton = document.querySelector(`.${buttonName}`);
  currentButton.classList.add("pressed");
  setTimeout(function(){
    currentButton.classList.remove("pressed");
  }, 200);
}