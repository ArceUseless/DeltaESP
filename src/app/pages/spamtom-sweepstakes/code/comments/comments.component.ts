import { Component, ElementRef, ViewChild } from '@angular/core';
import { COMMENTS_INFO } from '../../../../constants';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {
  @ViewChild('audioRef1') audioRef1!: ElementRef<HTMLAudioElement>;
  isPlaying = false;
  volume = 0.5; // Volumen inicial (50%)
  comments = COMMENTS_INFO;
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
