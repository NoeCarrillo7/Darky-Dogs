import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion3Franquicias } from './seccion3-franquicias';

describe('Seccion3Franquicias', () => {
  let component: Seccion3Franquicias;
  let fixture: ComponentFixture<Seccion3Franquicias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seccion3Franquicias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seccion3Franquicias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
