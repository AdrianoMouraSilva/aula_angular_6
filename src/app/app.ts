import { Component, signal, input } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { Personagem } from './components/personagem/personagem';
import { Votacao } from './components/votacao/votacao';


@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  imports: [Votacao],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('aula06');
 

}
