let all_btn = document.querySelectorAll(".drum");
//audio object

var tom1 = new Audio("sounds/tom-1.mp3")
var tom2 = new Audio("sounds/tom-2.mp3")
var tom3 = new Audio("sounds/tom-3.mp3")
var tom4 = new Audio("sounds/tom-4.mp3")
var kik = new Audio("sounds/kick-bass.mp3")
var snare = new Audio("sounds/snare.mp3")
var crash = new Audio("sounds/crash.mp3")

for(let i = 0 ; i < all_btn.length ; i++){
    
all_btn[i].addEventListener("click", function(){
       if(this.textContent === "w"){
        tom1.play();
       }else if(this.textContent === "a"){
        tom2.play();
       }else if(this.textContent === "s"){
        tom3.play();
       }else if(this.textContent === "d"){
        kik.play();
       }else if(this.textContent === "j"){
        tom4.play();
       }else if(this.textContent === "k"){
        snare.play();
        
       }else if(this.textContent === "l"){
        crash.play();
       }
       buttonAnimation(this.textContent)
    });


};


document.addEventListener("keypress",function(event){
    
    

    if(event.key === "w"){
        tom1.play();
    }else if(event.key === "a"){
        tom2.play();
       }else if(event.key === "s"){
        tom3.play();
       }else if(event.key === "d"){
        kik.play();
       }else if(event.key === "j"){
        tom4.play();
       }else if(event.key === "k"){
        snare.play();
        
       }else if(event.key === "l"){
        crash.play();
       }

       buttonAnimation(event.key)
});

function buttonAnimation(currentKey){
      var activeButton = document.querySelector("." + currentKey)
      activeButton.classList.add("pressed");
      setTimeout(() => {
        activeButton.classList.remove("pressed")
      }, 100);
}