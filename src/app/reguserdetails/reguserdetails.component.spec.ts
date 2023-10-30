import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReguserdetailsComponent } from './reguserdetails.component';

describe('ReguserdetailsComponent', () => {
  let component: ReguserdetailsComponent;
  let fixture: ComponentFixture<ReguserdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReguserdetailsComponent]
    });
    fixture = TestBed.createComponent(ReguserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
