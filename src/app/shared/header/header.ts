import { Component, signal, inject, DOCUMENT } from '@angular/core';
import { NgClass } from '@angular/common';
import { BurgermenuService } from '../../burgermenu-service';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private document = inject(DOCUMENT);
  burgermenu = inject(BurgermenuService);
  translate = inject(TranslateService);

  get openMenu() {
    return this.burgermenu.isOpen;
  }

  activeButton = signal<'btn1' | 'btn2'>('btn1');

  switchLanguage(button: 'btn1' | 'btn2', language: string): void {
    this.activeButton.set(button);
    this.translate.use(language);
    this.document.documentElement.lang = language;
  }
}
