import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamMenu } from './ham-menu';

describe('HamMenu', () => {
  let component: HamMenu;
  let fixture: ComponentFixture<HamMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HamMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HamMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
