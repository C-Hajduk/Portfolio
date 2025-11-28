import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-skills',
  imports: [TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  private translate = inject(TranslateService);
}
