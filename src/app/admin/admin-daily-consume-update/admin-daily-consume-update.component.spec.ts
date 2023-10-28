import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDailyConsumeUpdateComponent } from './admin-daily-consume-update.component';

describe('AdminDailyConsumeUpdateComponent', () => {
  let component: AdminDailyConsumeUpdateComponent;
  let fixture: ComponentFixture<AdminDailyConsumeUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDailyConsumeUpdateComponent]
    });
    fixture = TestBed.createComponent(AdminDailyConsumeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
