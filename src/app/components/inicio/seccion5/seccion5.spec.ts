import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion5 } from './seccion5';

describe('Seccion5', () => {
  let component: Seccion5;
  let fixture: ComponentFixture<Seccion5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seccion5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seccion5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
