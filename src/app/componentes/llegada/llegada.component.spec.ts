import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlegadaComponent } from './llegada.component';

describe('LlegadaComponent', () => {
  let component: LlegadaComponent;
  let fixture: ComponentFixture<LlegadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LlegadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlegadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
