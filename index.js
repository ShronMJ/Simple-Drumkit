var drumLength = document.getElementsByClassName('drum').length;

for(let i = 0; i<drumLength;i++){
    document.getElementsByClassName("drum")[i].addEventListener("click", function (){
        var clickedDrum = this.className[0];//[0] to select the first class from each element
        makeSound(clickedDrum);
        makeAnimation(clickedDrum);
    })
    
}
document.addEventListener("keydown",(e)=>{
    makeSound(e.key);
    makeAnimation(e.key);
})

function makeSound(key){
    switch (key) {
        case "w":
            let snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "a":
            let kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;
        case 's':
            let tom1= new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'd':
            let tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case 'j':
            let tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'k':
            let tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'l':
            let crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;    
        default:
            console.log(key);
            break;
    }
}
function makeAnimation(key){
    var validKey = ['w','a','s','d','j','k','l'];
    if(validKey.includes(key)){
        var pressedButton = document.getElementsByClassName(key)[0];
        pressedButton.classList.add("pressed");
    
        setTimeout(()=>{
            pressedButton.classList.remove("pressed");
        }, 100);
    }else{
        console.log("Hoi, don't press this key");
    }

}