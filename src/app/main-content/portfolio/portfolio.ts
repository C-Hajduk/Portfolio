import { Component } from '@angular/core';
import { ProjectsRight } from "./projects-right/projects-right";
import { ProjectsLeft } from "./projects-left/projects-left";

@Component({
  selector: 'app-portfolio',
  imports: [ProjectsRight, ProjectsLeft],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {

}
