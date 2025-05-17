import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-secretpipis',
  templateUrl: './secretpipis.component.html',
  styleUrl: './secretpipis.component.scss'
})
export class SecretpipisComponent {
  constructor(){
  }

  triggerSound(){
    const audio = new Audio('../../../assets/audio/sounds/crowd_gasp.ogg');
    audio.play();
  }
}
