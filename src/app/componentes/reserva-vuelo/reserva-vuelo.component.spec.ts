import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaVueloComponent } from './reserva-vuelo.component';

describe('ReservaVueloComponent', () => {
  let component: ReservaVueloComponent;
  let fixture: ComponentFixture<ReservaVueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservaVueloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
