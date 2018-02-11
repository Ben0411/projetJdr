import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserInfosComponent } from './dashboard-user-infos.component';

describe('DashboardUserInfosComponent', () => {
  let component: DashboardUserInfosComponent;
  let fixture: ComponentFixture<DashboardUserInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardUserInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUserInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
