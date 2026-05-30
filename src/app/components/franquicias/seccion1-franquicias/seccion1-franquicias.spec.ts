import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion1Franquicias } from './seccion1-franquicias';

describe('Seccion1Franquicias', () => {
  let component: Seccion1Franquicias;
  let fixture: ComponentFixture<Seccion1Franquicias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seccion1Franquicias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seccion1Franquicias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
