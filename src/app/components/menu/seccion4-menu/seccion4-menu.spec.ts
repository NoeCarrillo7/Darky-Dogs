import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion4Menu } from './seccion4-menu';

describe('Seccion4Menu', () => {
  let component: Seccion4Menu;
  let fixture: ComponentFixture<Seccion4Menu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seccion4Menu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seccion4Menu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
