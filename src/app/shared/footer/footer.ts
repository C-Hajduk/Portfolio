import { Component, inject } from '@angular/core';
import { BurgermenuService } from '../../burgermenu-service';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-footer',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  translate = inject(TranslateService);
  burgermenu = inject(BurgermenuService);
}
