import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MkainosComponent } from './mkainos.component';

describe('MkainosComponent', () => {
  let component: MkainosComponent;
  let fixture: ComponentFixture<MkainosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MkainosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MkainosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
