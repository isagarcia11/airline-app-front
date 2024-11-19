import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarEquipajeComponent } from './gestionar-equipaje.component';

describe('GestionarEquipajeComponent', () => {
  let component: GestionarEquipajeComponent;
  let fixture: ComponentFixture<GestionarEquipajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionarEquipajeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionarEquipajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
