import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffheaderFilesComponent } from './staffheader-files.component';

describe('StaffheaderFilesComponent', () => {
  let component: StaffheaderFilesComponent;
  let fixture: ComponentFixture<StaffheaderFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffheaderFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffheaderFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
