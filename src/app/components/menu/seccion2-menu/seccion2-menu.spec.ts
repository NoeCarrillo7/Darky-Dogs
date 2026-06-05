import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion2Menu } from './seccion2-menu';

describe('Seccion2Menu', () => {
  let component: Seccion2Menu;
  let fixture: ComponentFixture<Seccion2Menu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seccion2Menu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seccion2Menu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
