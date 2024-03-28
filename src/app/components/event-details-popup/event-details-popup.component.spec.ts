import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailsPopupComponent } from './event-details-popup.component';

describe('EventDetailsPopupComponent', () => {
  let component: EventDetailsPopupComponent;
  let fixture: ComponentFixture<EventDetailsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventDetailsPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
