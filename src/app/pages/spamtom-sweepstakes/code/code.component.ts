import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrl: './code.component.scss'
})
export class CodeComponent {
  @ViewChild('audioRef1') audioRef1!: ElementRef<HTMLAudioElement>;
  isPlaying = false;
  volume = 0.5; // Volumen inicial (50%)
  constructor(){
  }
  // Método para reproducir/pausar
  togglePlay() {
    if (this.isPlaying) {
      this.audioRef1.nativeElement.pause();
      this.isPlaying = false;
    } else {
      this.audioRef1.nativeElement.play();
      this.isPlaying = true;
      this.changeVolume();
    }
  }

  // Método para cambiar el volumen
  changeVolume() {
    this.audioRef1.nativeElement.volume = this.volume;
  }
}
