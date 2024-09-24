
function $(element) { return element = document.querySelector(element)  }
function $All(element) { return element = document.querySelectorAll(element)  }

const body = $("body");
const buttons = $All("button");
const drumsBtt = $All('.drum');
const keys = ['w','a','s','d','j','k','l'];
const sounds = ['./src/sounds/crash.mp3', './src/sounds/kick-bass.mp3', './src/sounds/snare.mp3', './src/sounds/tom-1.mp3', './src/sounds/tom-2.mp3', './src/sounds/tom-3.mp3', './src/sounds/tom-4.mp3'];
const bind = {};

keys.forEach((key, index) => {
    bind[key] = sounds[index];
});

function drum(key){
    const sound = new Audio(bind[key]);
    // console.log(sound);
    sound.currentTime = 0;
    sound.play();
}

window.onload = ()=>{
    buttons.forEach((button, index) =>{
        button.addEventListener('click', ()=>{
            // console.log('click');
            console.log(button.textContent);
            drum(button.textContent);
        });
    })

    keys.forEach((key, index) =>{
        document.addEventListener('keydown', e =>{
            if(e.key === key){
                console.log(`${key}`);
                drumsBtt[index].classList.add('zoom-in-anim');
                // drumsBtt[index].style.backgroundColor = 'red';
                // console.log(drumsBtt[index]);
                drum(key);
            }
        });
        document.addEventListener('keyup', e =>{
            if(e.key === key){
                console.log(`${key}`);
                drumsBtt[index].classList.remove('zoom-in-anim');
                // drumsBtt[index].style.backgroundColor = '';
                // console.log(drumsBtt[index]);
                drum(key);
            }
        });
    });
}

let angle = 0;
let speed = 0.1;

function main(){
    body.style.backgroundImage = `conic-gradient(from ${angle}deg, black 100deg, gray 150deg, black 200deg)`;
    angle += speed;
    if(angle >= 360){
        angle = 0;
    }
}

setInterval(main, 0);
