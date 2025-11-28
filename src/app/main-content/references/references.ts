import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  imports: [TranslatePipe],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {
  private translate = inject(TranslateService);
}
