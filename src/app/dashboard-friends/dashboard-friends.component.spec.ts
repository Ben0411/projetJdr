import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFriendsComponent } from './dashboard-friends.component';

describe('DashboardFriendsComponent', () => {
  let component: DashboardFriendsComponent;
  let fixture: ComponentFixture<DashboardFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
