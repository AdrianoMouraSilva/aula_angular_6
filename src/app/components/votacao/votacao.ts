import { Component } from '@angular/core';
import { Personagem } from '../personagem/personagem';

@Component({
  selector: 'app-votacao',
  imports: [Personagem],
  templateUrl: './votacao.html',
  styleUrl: './votacao.css'
})
export class Votacao {
  personagem: string = 'Super Homem'
  totVotos: number = 5
  personagemImg: string = 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTsk5_Tyg1HTYWX_QDQsdH7fPlRj55d6CmjiRyQKXGgSMG4buSgJIiQG5uQIDyxXNiyg_6uVcO2fQVpaiI0R_4WJ8KgWsECKToITmHZjBxwsw'

  incrementarVotos() {
    // alert(this.totVotos++);
    this.totVotos++
  }
}
