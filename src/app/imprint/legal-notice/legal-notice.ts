import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [TranslatePipe, NgIf],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {
  translate = inject(TranslateService);
}
