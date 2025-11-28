import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {
  translate = inject(TranslateService);

  language = this.translate.currentLang || 'en';

  constructor() {
    this.translate.onLangChange.subscribe((event) => {
      this.language = event.lang;
    });
  }
}
