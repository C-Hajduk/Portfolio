import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/footer/footer';
import { Header } from './shared/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Portfolio');
}
console.log(
  '%c ╔════════════════════════════╗',
  'color: #FFFDD0; font-weight: bold; background: #000;'
);
console.log(
  '%c ║   CHRISTIAN HAJDUK    ║',
  'color: #FFFDD0; font-weight: bold; font-size: 20px; background: #000;'
);
console.log(
  '%c ╚════════════════════════════╝',
  'color: #FFFDD0; font-weight: bold; background: #000;'
);
