import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  globalAudio: any;
  isPlaying: boolean = false; 
  lancerCounter: number = 0;
  isOpen = false;
  him = true;
  currentText: string = "";
  texts: string[] = [
    "* ¡No olvides mirar el LÉEME al descargar las traducciones!",
    "* Si tienes cualquier duda, ¡únete a nuestro Discord!",
    "* El Botón Lancer observa tu ALMA. ¿Podrás llegar hasta 1000?",
    "* Huele a grandes sueños y CSS cuestionable.",
    "* El poder de no saber lo que es una grajea inunda tu interior.",
    "* Starwalker     El original     estuvo aquí.",
    "* Cuidado con el hombre que habla con manos.",
    "* Spoiler: El musgo será el jefe secreto del Capítulo 4.",
    "* Toby Fox VS Sebastian Wolf: ¡La batalla del siglo!",
    "* ¿¿¿Quién es Pluey???",
    "* Echo de menos a Tenna...",
    "* ¿No tienes nada mejor que hacer?",
    "* e e e e e e e",
    "* humano, recuerdo que eres genocidios"
  ];
  textIndex: number = 0;
  interval: any;
  constructor(private router: Router){

  }

  ngOnInit(): void {
    this.lancerCounter = this.getItem('lancer-counter') != null ? Number(this.getItem('lancer-counter')) : 0;
    this.currentText = this.texts[this.textIndex]; // Mostrar el primer texto
    this.texts = this.fisherYatesShuffle(this.texts);
    this.startAnimationLoop();
  }

  startAnimationLoop() {
    this.interval = setInterval(() => {
      this.textIndex = (this.textIndex + 1) % this.texts.length;
      this.currentText = ""; // Oculta el texto antes de cambiarlo para reiniciar la animación

      setTimeout(() => {
        this.currentText = this.texts[this.textIndex];
      }, 100); // Espera un poco para reiniciar la animación
    }, 20000); // Cambia cada 3 segundos
  }

  fisherYatesShuffle<T>(array: T[]): T[] {
    let shuffled = [...array]; // Copia del array original
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Intercambia elementos
    }
    return shuffled;
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  lancer(){
    if(!this.isPlaying){
      this.lancerCounter++;
      this.setItem('lancer-counter', `${this.lancerCounter}`)
      switch(this.lancerCounter){
        case 10: 
          this.playsound('vo_count10.ogg', true)
          break;
        case 25: 
          this.playsound('vo_count11.ogg', true)
          break;
        case 50: 
          this.playsound('vo_count12.ogg', true)
          break;
        case 69:
          this.playsound('ohyes.mp3', true)
          break;
        case 100: 
          this.playsound('vo_count13.ogg', true)
          break;
        case 250: 
          this.playsound('vo_count14.ogg', true)
          break;
        case 500: 
          this.playsound('vo_count15.ogg', true)
          break;
        case 750: 
          this.playsound('vo_count16.ogg', true)
          break;
        case 1000: 
          this.playsound('vo_count17.ogg', true)
          break;
      }
    }
    this.playsound('queen_mixtape.wav', false);
    
  }

  playsound(soundname: string, nocap: boolean) {
    if (nocap) {
      this.isPlaying = true;
      let audio = new Audio();
      audio.src = `../../../assets/audio/sounds/${soundname}`;
      audio.load();
      audio.play();
      audio.onended = () => {
        if(this.isPlaying){
          this.isPlaying = false;
        }
      };
    } else {
      if (this.globalAudio) {
        if (this.globalAudio.ended) {
          this.reproducirSonido(soundname);
        }
      } else {
        this.reproducirSonido(soundname);
      }
    }
  }

  private reproducirSonido(soundname: string) {
    this.globalAudio = new Audio();
    this.globalAudio.src = `../../../assets/audio/sounds/${soundname}`;
    this.globalAudio.load();
    this.globalAudio.play();
    
    this.isPlaying = true; 

    // Cuando termine, volver a "false"
    this.globalAudio.onended = () => {
      if(this.isPlaying){
        this.isPlaying = false;
      }
    };
  }

  himremove(){
    if(this.him){
      this.playsound('him-fade.ogg', false)
      this.him = false;
    }
    
  }

  starwalker(){
    let y = Math.random();
    if (y < 0.5)
      y = 0
    else
      y= 1
    this.playsound(`${y}.wav`, false)
  }

setItem(key: string, value: string): void {
  localStorage.setItem(key, value);
}

// Get a value from local storage
getItem(key: string): string | null {
  return localStorage.getItem(key);
}

goTo(route: string){
  this.router.navigateByUrl(route);
}

}
