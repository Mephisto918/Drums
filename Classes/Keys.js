export default class Keys{
    constructor(key, button, sound){
        this.key = key;
        this.button = button;
        this.sound = new Audio(sound);
        this.initialize();
    }

    initialize(){
        this.button.addEventListener('click', ()=> this.sound.playSound());

        document.addEventListener('keydown', e =>{
            if(e.key === this.key){
                this.playSound();
                console.log(`${key}`);
            }
        });
    }

    playDrumSound(){
        this.sound.currentTime = 0;
        this.sound.playSound();
    }
}