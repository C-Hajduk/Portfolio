import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsLeft } from './projects-left';

describe('ProjectsLeft', () => {
  let component: ProjectsLeft;
  let fixture: ComponentFixture<ProjectsLeft>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsLeft]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsLeft);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
