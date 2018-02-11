import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionJdrComponent } from './description-jdr.component';

describe('DescriptionJdrComponent', () => {
  let component: DescriptionJdrComponent;
  let fixture: ComponentFixture<DescriptionJdrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionJdrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionJdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
