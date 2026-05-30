import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion5Franquicias } from './seccion5-franquicias';

describe('Seccion5Franquicias', () => {
  let component: Seccion5Franquicias;
  let fixture: ComponentFixture<Seccion5Franquicias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seccion5Franquicias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seccion5Franquicias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
