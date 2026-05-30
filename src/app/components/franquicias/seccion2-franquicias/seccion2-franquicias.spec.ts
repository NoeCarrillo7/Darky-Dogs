import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion2Franquicias } from './seccion2-franquicias';

describe('Seccion2Franquicias', () => {
  let component: Seccion2Franquicias;
  let fixture: ComponentFixture<Seccion2Franquicias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seccion2Franquicias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seccion2Franquicias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
