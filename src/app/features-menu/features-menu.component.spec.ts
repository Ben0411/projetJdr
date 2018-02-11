import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesMenuComponent } from './features-menu.component';

describe('FeaturesMenuComponent', () => {
  let component: FeaturesMenuComponent;
  let fixture: ComponentFixture<FeaturesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
