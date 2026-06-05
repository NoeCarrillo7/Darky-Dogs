import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion3Menu } from './seccion3-menu';

describe('Seccion3Menu', () => {
  let component: Seccion3Menu;
  let fixture: ComponentFixture<Seccion3Menu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seccion3Menu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seccion3Menu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
