import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion4Franquicias } from './seccion4-franquicias';

describe('Seccion4Franquicias', () => {
  let component: Seccion4Franquicias;
  let fixture: ComponentFixture<Seccion4Franquicias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seccion4Franquicias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seccion4Franquicias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
