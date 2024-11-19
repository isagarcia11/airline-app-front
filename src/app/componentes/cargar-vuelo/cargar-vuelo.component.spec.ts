import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarVueloComponent } from './cargar-vuelo.component';

describe('CargarVueloComponent', () => {
  let component: CargarVueloComponent;
  let fixture: ComponentFixture<CargarVueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CargarVueloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargarVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
