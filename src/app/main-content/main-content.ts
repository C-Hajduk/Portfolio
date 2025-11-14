import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { AboutMe } from './about-me/about-me';
import { Skills } from './skills/skills';
import { ArrowRight } from './arrow-right/arrow-right';
import { ArrowLeft } from './arrow-left/arrow-left';
import { Portfolio } from './portfolio/portfolio';
import { References } from './references/references';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-main-content',
  imports: [Hero, AboutMe, ArrowRight, Skills, ArrowLeft, Portfolio, References, Contact],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss',
})
export class MainContent {

}
