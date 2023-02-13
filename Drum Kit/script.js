//jQuery
//document.querySelectorAll
$(".drum").on("click", handleClick);
$(document).on("keydown", handleKeyPress);

function handleClick(event){
let key = event.target.innerText;
makeSound(key);
animate(key);
}

function handleKeyPress(event){
makeSound(event.key);
animate(event.key);
}

function makeSound(key){
const sounds = {"w":"tom-1","a":"tom-2","s":"tom-3","d":"tom-4","j":"snare","k":"crash","l":"kick-bass"};
const audio = new Audio("sounds/"+sounds[key]+".mp3");
audio.play();
}

function animate(key){
$("."+key).addClass("pressed");
setTimeout(()=>{$("."+key).removeClass("pressed");},150);
}

/*
with javascript
//detecting button press
const numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    const buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//detecting keyboard press
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {

  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      let snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      let crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      let kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default: console.log(key);
  }
}


function buttonAnimation(currentKey) {

  //assigning a class called .pressed to it so that it shows that behaviours

  const activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

  //100 is the time in milliseconds
}*/