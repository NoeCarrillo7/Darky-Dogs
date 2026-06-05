import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccion1Menu } from './seccion1-menu';

describe('Seccion1Menu', () => {
  let component: Seccion1Menu;
  let fixture: ComponentFixture<Seccion1Menu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seccion1Menu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seccion1Menu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
