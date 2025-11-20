import { Component } from '@angular/core';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  openMenu: boolean = false;

  activeButton: 'btn1' | 'btn2' = 'btn1';

  setActive(button: 'btn1' | 'btn2') {
    this.activeButton = button;
  }

  startAnimation() {
    this.openMenu = !this.openMenu;
    // if(this.openMenu){
    //   this.openMenu = false;
    // }
    // else{
    //   this.openMenu = true;
    // }
  }
}
