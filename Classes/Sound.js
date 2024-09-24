
export default class Sound{
    constructor(file){
        this.file = file;
        this.audio = new Audio(file);
    }

    get soundName(){
        console.log(this.file);
    }

    playSound(){
        this.audio.currentTime = 0;
        this.audio.play();
    }
}