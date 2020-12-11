import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalvinhacksComponent } from './calvinhacks.component';

describe('CalvinhacksComponent', () => {
  let component: CalvinhacksComponent;
  let fixture: ComponentFixture<CalvinhacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalvinhacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalvinhacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
