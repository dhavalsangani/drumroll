// Adding sound 7 times using For loop

for(var i=0;i<=6;i++){
    document.querySelectorAll("button")[i].addEventListener("click",onClick);
}



// Detecting Mouse click

function onClick(){
    // var audio = new Audio("sounds/tom-1.mp3");
    // audio.play();
    // this.style.color="#160557";
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
}


// Detecting Keyboard press

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(value){
    switch (value) {
        case "W":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "A":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "S":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "D":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "J":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "K":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "L":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
    
        default:
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
    }
}

function buttonAnimation(value){
    var activeButton = document.querySelector("." + value);
    activeButton.classList.add("animation");
    setTimeout(function(){
        activeButton.classList.remove("animation");
    }, 100);

}