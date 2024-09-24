import Sound from './Sound.js';
export default class Drums{
    constructor(key, sound){
        this.key = key;
        this.sound = new Sound(sound);
    }

    play(key){
        this.sound.playSound();
        // console.log(`key ${this.key}`);
    }
    get soundGet(){
        this.sound.soundName;
    }
}