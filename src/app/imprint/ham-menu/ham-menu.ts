import { Component, inject } from '@angular/core';
import { Header } from "../../shared/header/header";
import { BurgermenuService } from '../../burgermenu-service';

@Component({
  selector: 'app-ham-menu',
  imports: [Header],
  templateUrl: './ham-menu.html',
  styleUrl: './ham-menu.scss',
})
export class HamMenu {

  burgermenu = inject(BurgermenuService)
}
