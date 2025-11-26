import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class BurgermenuService {

  isOpen = false;

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  switch() {
    this.isOpen = !this.isOpen
  }
}
