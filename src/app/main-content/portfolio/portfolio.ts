import { Component } from '@angular/core';
import { ProjectsRight } from './projects-right/projects-right';
import { ProjectsLeft } from './projects-left/projects-left';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [ProjectsRight, ProjectsLeft, CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  hover = false;

  projects = [
    {
      title: 'Pokédex',
      direction: 'left',
      number: '01/04',
      hover: false,
      image: 'assets/img/Pokedex_black_white.png',
      imagecolor: 'assets/img/Pokedex_color.png',
      tech: 'JavaScript | HTML | CSS | API',
      description:
        'Based on the PokeAPI, a simple library that provides and catalogues Pokémon information.',
      github: 'https://github.com/...',
    },
    {
      title: 'El Pollo Loco',
      direction: 'right',
      number: '02/04',
      hover: false,
      image: 'assets/img/El_Pollo_Locco_black_white.png',
      imagecolor: 'assets/img/El_Pollo_Locco_color.png',
      tech: 'JavaScript | HTML | CSS',
      description: 'A simple jump-and-run game based on an object-oriented approach.',
      github: 'https://github.com/...',
    },
    {
      title: 'Join',
      direction: 'left',
      number: '03/04',
      hover: false,
      image: 'assets/img/Pokedex_black_white.png',
      imagecolor: 'assets/img/Pokedex_color.png',
      tech: 'Angular | TypeScript | HTML | CSS | Firebase',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      github: 'https://github.com/...',
    },
  ];
}
