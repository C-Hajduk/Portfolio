import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { BurgermenuService } from '../../burgermenu-service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  burgermenu = inject(BurgermenuService);

  get openMenu() {
    return this.burgermenu.isOpen;
  }

  activeButton: 'btn1' | 'btn2' = 'btn1';

  setActive(button: 'btn1' | 'btn2') {
    this.activeButton = button;
  }
}
