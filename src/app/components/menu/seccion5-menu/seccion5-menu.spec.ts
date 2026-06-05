import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion5Menu } from './seccion5-menu';

describe('Seccion5Menu', () => {
  let component: Seccion5Menu;
  let fixture: ComponentFixture<Seccion5Menu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seccion5Menu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seccion5Menu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
