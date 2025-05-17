import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.scss'
})
export class NotfoundComponent {
  @ViewChild('audioRef1') audioRef1!: ElementRef<HTMLAudioElement>;
  currentImage: string = "../../../assets/images/dog-sleep.png";
  currentAudio: string = "../../../assets/audio/bgm/results.mp3";
  special: boolean = false;
  moving: boolean = false;
  constructor(){
    if(this.getRandomNumber() == 6){
      this.special = true;
      this.currentImage = "../../../assets/images/dog-maraca.png";
      this.currentAudio = "../../../assets/audio/bgm/baciperugina2.mp3"
    }
  }

  changeState(){
    this.moving = !this.moving;
    if (!this.moving) {
      this.audioRef1.nativeElement.pause();
    } else {
      this.audioRef1.nativeElement.play();
    }
    if(this.special){
      if(this.moving){
        this.currentImage = "../../../assets/images/dog-maraca.gif";
      }else{
        this.currentImage = "../../../assets/images/dog-maraca.png";
      }
    }else{
      if(this.moving){
        this.currentImage = "../../../assets/images/dog-sleep.gif";
      }else{
        this.currentImage = "../../../assets/images/dog-sleep.png";
      }
    }
  }

  getRandomNumber(): number {
    return Math.floor(Math.random() * 10);
  }
}

