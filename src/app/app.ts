import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/footer/footer';
import { Header } from './shared/header/header';
import { HamMenu } from './imprint/ham-menu/ham-menu';
import { TranslatePipe } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, HamMenu, TranslatePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ngx-translate-demo-standalone');
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
