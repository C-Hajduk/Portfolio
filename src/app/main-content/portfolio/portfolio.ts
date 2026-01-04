import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  private translate = inject(TranslateService);

  opacity = false;

  openGithub(url: string) {
    window.open(url, '_blank');
  }

  projects = [
    {
      title: 'Pokédex',
      direction: 'left',
      number: '01/03',
      image: 'assets/img/Pokedex_color.png',
      tech: 'JavaScript | HTML | CSS | API',
      descriptionKey: 'portfolio.project1.description',
      github: 'https://github.com/C-Hajduk/Pokedex.git',
    },
    {
      title: 'El Pollo Loco',
      direction: 'right',
      number: '02/03',
      image: 'assets/img/El_Pollo_Locco_color.png',
      tech: 'JavaScript | HTML | CSS',
      descriptionKey: 'portfolio.project2.description',
      github: 'https://github.com/C-Hajduk/El-Pollo-Loco.git',
    },
    {
      title: 'Join',
      direction: 'left',
      number: '03/03',
      image: 'assets/img/Join.png',
      tech: 'Angular | TypeScript | HTML | CSS | Firebase',
      descriptionKey: 'portfolio.project3.description',
      github: 'https://github.com/C-Hajduk/Join.git',
    },
  ];
}
