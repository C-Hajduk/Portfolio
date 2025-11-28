import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {
  translate = inject(TranslateService);

  language = this.translate.currentLang || 'en';

  constructor() {
    this.translate.onLangChange.subscribe((event) => {
      this.language = event.lang;
    });
  }
}
