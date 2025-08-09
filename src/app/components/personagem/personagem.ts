import { Component, EventEmitter, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-personagem',
  imports: [],
  templateUrl: './personagem.html',
  styleUrl: './personagem.css'
})
export class Personagem {
  // @Input() personagem = signal<string>('');
  // @Input() totVotos = signal<number>(0);
  // @Input() personagemImg = signal<string>('');

  nome = input<string>();
  qtdeVotos = input<number>();
  urlImg = input<string>();

  votar = output<void>();
}
