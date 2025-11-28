import { Component, inject } from '@angular/core';
import { BurgermenuService } from '../../burgermenu-service';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  translate = inject(TranslateService);
  burgermenu = inject(BurgermenuService);
}
