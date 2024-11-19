import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEmbarqueComponent } from './menu-embarque.component';

describe('MenuEmbarqueComponent', () => {
  let component: MenuEmbarqueComponent;
  let fixture: ComponentFixture<MenuEmbarqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuEmbarqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuEmbarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
