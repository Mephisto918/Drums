// import Key from './Classes/Keys.js';
// import Sound from './Classes/Sound.js';
import Drum from './Classes/Drum.js';

function $(element) { return element = document.querySelector(element)  }
function $All(element) { return element = document.querySelectorAll(element)  }

const body = $("body");
const buttons = $All("button");
const keys = ['w','a','s','d','j','k','l'];
const sounds = ['./src/sounds/crash.mp3', './src/sounds/kick-bass.mp3', './src/sounds/snare.mp3', './src/sounds/tom-1.mp3', './src/sounds/tom-2.mp3', './src/sounds/tom-3.mp3', './src/sounds/tom-4.mp3'];


window.onload = ()=>{
    const drums = {};
    keys.forEach((key, index) =>{
        drums[key] = new Drum(key, sounds[index]);
        document.addEventListener('keydown', e =>{
            if(e.key === key){
                console.log(`${key}`);
                drums[key].play(key);   
                drums[key].soundGet;   
            }
        });
    })
    buttons.forEach((button)=>{
        button.addEventListener('click', ()=>{
            // console.log('click');
            console.log(button.textContent);
            drums[button.textContent].play(button.textContent);   
        });
    })
}
 


let angle = 0;
let speed = 0.5;

function main(){

    body.style.backgroundImage = `conic-gradient(from ${angle}deg, gray, black)`;
    angle += speed;
}

setInterval(main, 0);
