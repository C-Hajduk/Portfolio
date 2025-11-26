import { Component, inject } from '@angular/core';
import { BurgermenuService } from '../../burgermenu-service';


@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  burgermenu = inject(BurgermenuService);
}
