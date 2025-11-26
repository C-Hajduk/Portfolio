import { Component, signal, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { BurgermenuService } from '../../burgermenu-service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  burgermenu = inject(BurgermenuService);
  translateService = inject(TranslateService);

  get openMenu() {
    return this.burgermenu.isOpen;
  }

  activeButton = signal<'btn1' | 'btn2'>('btn1');

  setActive(button: 'btn1' | 'btn2') {
    this.activeButton.set(button);
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
  }
}
