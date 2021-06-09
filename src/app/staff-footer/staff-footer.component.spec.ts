import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffFooterComponent } from './staff-footer.component';

describe('StaffFooterComponent', () => {
  let component: StaffFooterComponent;
  let fixture: ComponentFixture<StaffFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
