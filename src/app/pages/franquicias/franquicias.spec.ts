import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Franquicias } from './franquicias';

describe('Franquicias', () => {
  let component: Franquicias;
  let fixture: ComponentFixture<Franquicias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Franquicias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Franquicias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
