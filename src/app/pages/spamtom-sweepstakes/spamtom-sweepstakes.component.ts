import { Component, ElementRef, ViewChild } from '@angular/core';
import { AUCTIONS_INFO, PRICES_INFO } from '../../constants';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spamtom-sweepstakes',
  templateUrl: './spamtom-sweepstakes.component.html',
  styleUrl: './spamtom-sweepstakes.component.scss'
})
export class SpamtomSweepstakesComponent {
  @ViewChild('modal_about_spamtom') modal_about_spamtom!: ElementRef; 
  @ViewChild('modal_about_org') modal_about_org!: ElementRef;
  @ViewChild('modal_price') modal_price!: ElementRef;
  @ViewChild('modal_auction') modal_auction!: ElementRef;
  @ViewChild('audioRef1') audioRef1!: ElementRef<HTMLAudioElement>;
  @ViewChild('audioRef2') audioRef2!: ElementRef<HTMLAudioElement>;
  @ViewChild('audioRef3') audioRef3!: ElementRef<HTMLAudioElement>;
  @ViewChild('audioRef4') audioRef4!: ElementRef<HTMLAudioElement>;
  @ViewChild('audioRef5') audioRef5!: ElementRef<HTMLAudioElement>;
  isPlaying = false;
  volume = 0.5; // Volumen inicial (50%)
  audios = [
    '../../../assets/audio/bgm/midi-bigshot_byShinkoNetCavy.mp3',
    '../../../assets/audio/bgm/midi-cybers-world_byShinkoNetCavy.mp3',
    '../../../assets/audio/bgm/midi-pandora-palace_byShinkoNetCavy.mp3',
    '../../../assets/audio/bgm/midi-spamton-battle.mp3',
    '../../../assets/audio/bgm/midi-spamton.mp3'
  ];

  pricesCard = PRICES_INFO; 
  auctionsCard = AUCTIONS_INFO; 
  currentPrice: any = {};
  currentAudio: any = null; // Índice del audio actual
  constructor(
    private sanitizer: DomSanitizer,
    private router: Router){
    this.pricesCard = PRICES_INFO;
  }

  abrirModal(modalname: string, price?: any) {
    if(price){
      this.currentPrice = price;
      this.currentPrice.sanitizedTexts = [];
      this.currentPrice.texts.forEach((text: string) => {
        this.currentPrice.sanitizedTexts.push(this.sanitizer.bypassSecurityTrustHtml(text))
      });
      var video = modalname == 'modal_auction' ? document.getElementById('auction-video') as HTMLVideoElement :  document.getElementById('price-video') as HTMLVideoElement;
      var source1 = modalname == 'modal_auction' ? document.getElementById('auction-source-webm') as HTMLSourceElement : document.getElementById('price-source-webm') as HTMLSourceElement;
      var source2 = modalname == 'modal_auction' ? document.getElementById('auction-source-webm') as HTMLSourceElement : document.getElementById('price-source-mp4') as HTMLSourceElement;
      console.log(video)
      console.log(source1)
      console.log(source2)
      video?.pause()
      source1?.setAttribute('src', this.currentPrice.video + ".webm");
      source2?.setAttribute('src', this.currentPrice.video + ".mp4");
      video.load();
      video.muted = true;
      video.play();
    }
    switch(modalname){
      case 'modal_about_spamtom':
        this.modal_about_spamtom.nativeElement.style.display = "flex";
      break;
      case 'modal_about_org':
        this.modal_about_org.nativeElement.style.display = "flex";
      break;
      case 'modal_price':
        this.modal_price.nativeElement.style.display = "flex";
      break;
      case 'modal_auction':
        this.modal_auction.nativeElement.style.display = "flex";
      break;
    }
    
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    const navbar = document.querySelector('.links-container') as HTMLElement;
    if (navbar) {
      navbar.style.paddingRight = `${scrollbarWidth}px`;
    }

    const lancer = document.querySelector('.lancer') as HTMLElement;
    if (lancer) {
      lancer.style.paddingRight = `${scrollbarWidth}px`;
    }
  }

  cerrarModal(modalname: string) {
    switch(modalname){
      case 'modal_about_spamtom':
        this.modal_about_spamtom.nativeElement.style.display = "none";
      break;
      case 'modal_about_org':
        this.modal_about_org.nativeElement.style.display = "none";
      break;
      case 'modal_price':
        this.modal_price.nativeElement.style.display = "none";
      break;
      case 'modal_auction':
        this.modal_auction.nativeElement.style.display = "none";
      break;
    }
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";

    const navbar = document.querySelector('.links-container') as HTMLElement;
    if (navbar) {
      navbar.style.paddingRight = "";
    }

    const lancer = document.querySelector('.lancer') as HTMLElement;
    if (lancer) {
      lancer.style.paddingRight = "";
    }
  }

  cerrarModalSiClickFuera(event: MouseEvent, modalname: string) {
    switch(modalname){
      case 'modal_about_spamtom':
        if (event.target === this.modal_about_spamtom.nativeElement) {
          this.cerrarModal(modalname);
        }
      break;
      case 'modal_about_org':
        if (event.target === this.modal_about_org.nativeElement) {
          this.cerrarModal(modalname);
        }
      break;
      case 'modal_price':
        if (event.target === this.modal_price.nativeElement) {
          this.cerrarModal(modalname);
        }
      break;
      case 'modal_auction':
        if (event.target === this.modal_auction.nativeElement) {
          this.cerrarModal(modalname);
        }
      break;
    }
  }

  selectRandomAudio() {
    let random = Math.floor(Math.random() * 5);
    switch(random){
      case 0:
        this.currentAudio = this.audioRef1;
        break;
      case 1:
        this.currentAudio = this.audioRef2;
        break;
      case 2: 
        this.currentAudio = this.audioRef3;
        break;
      case 3:
        this.currentAudio = this.audioRef4;
        break;
      case 4:
        this.currentAudio = this.audioRef5;
        break;
    }
  }

  // Método para reproducir/pausar
  togglePlay() {
    if (this.isPlaying) {
      this.currentAudio.nativeElement.pause();
      this.isPlaying = false;
    } else {
      this.selectRandomAudio(); // Selecciona un audio aleatorio y lo reproduce
      this.currentAudio.nativeElement.play();
      this.isPlaying = true;
      this.changeVolume();
    }
  }

  // Método para cambiar el volumen
  changeVolume() {
    this.currentAudio.nativeElement.volume = this.volume;
  }

  goTo(route: string){
    this.router.navigateByUrl(route);
  }
}
