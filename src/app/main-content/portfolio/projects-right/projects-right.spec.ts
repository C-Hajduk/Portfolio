import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsRight } from './projects-right';

describe('ProjectsRight', () => {
  let component: ProjectsRight;
  let fixture: ComponentFixture<ProjectsRight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsRight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsRight);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
