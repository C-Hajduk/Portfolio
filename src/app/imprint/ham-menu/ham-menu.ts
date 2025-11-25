import { Component, inject } from '@angular/core';
import { Header } from "../../shared/header/header";
import { BurgermenuService } from '../../burgermenu-service';
import { Footer } from "../../shared/footer/footer";

@Component({
  selector: 'app-ham-menu',
  imports: [Header, Footer],
  templateUrl: './ham-menu.html',
  styleUrl: './ham-menu.scss',
})
export class HamMenu {
  burgermenu = inject(BurgermenuService);

  activeIndex: number | null = null;

  openborder(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;

  }

  hideBorder() {
    this.activeIndex = null
  }
}
