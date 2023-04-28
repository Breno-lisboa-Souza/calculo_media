import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Atividade';
  codigoRma: number = 1;
  Nome: string = "Higns";
  nota1: number = 10;
  nota2: number = 10;
  nota3: number = 10;
  nota4: number = 10;
  media: number = (this.nota1 + this.nota2 + this.nota3 + this.nota4)/4;
  imagem : string = "../assets/AL_10.jpg"

  codigoRma2: number = 2;
  Nome2: string = "Raighan";
  nota11: number = 9;
  nota22: number = 5;
  nota33: number = 2;
  nota44: number = 8;
  mediaa: number = (this.nota11 + this.nota22 + this.nota33 + this.nota44)/4;
  imagem2 : string = "../assets/AL_9.jpg"

  codigoRmaa: number = 3;
  Nome3: string = "Shilva";
  nota111: number = 10;
  nota222: number = 8;
  nota333: number = 10;
  nota444: number = 4;
  media3: number = (this.nota111 + this.nota222 + this.nota333 + this.nota444)/4;
  imagem3 : string = "../assets/AL_8.jpg"

  codigoRma4: number = 4;
  Nome4: string = "Nichol";
  nota1111: number = 7;
  nota2222: number = 8;
  nota3333: number = 6;
  nota4444: number = 7;
  media4: number = (this.nota1111 + this.nota2222 + this.nota3333 + this.nota4444)/4;
  imagem4 : string = "../assets/AL_7.jpg"

  codigoRma5: number = 5;
  Nome5: string = "Aswim";
  nota11111: number = 7;
  nota22222: number = 5;
  nota33333: number = 6;
  nota44444: number = 6;
  media5: number = (this.nota11111 + this.nota22222 + this.nota33333 + this.nota44444)/4;
  imagem5 : string = "../assets/AL_6.jpg"

  codigoRma6: number = 6;
  Nome6: string = "Jiva";
  nota111111: number = 9;
  nota222222: number = 5;
  nota333333: number = 6;
  nota444444: number = 8;
  media6: number = (this.nota111111 + this.nota222222 + this.nota333333 + this.nota444444)/4;
  imagem6 : string = "../assets/AL_3.jpg"

  dataFicticia: string = "23/04/2023"




  constructor(){
}

}


