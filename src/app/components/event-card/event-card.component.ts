import { Component, Input } from '@angular/core';
import { IEvent, TimelineService } from '../../services/timeline/timeline.service';
import { EventDetailsPopupComponent } from "../event-details-popup/event-details-popup.component";

@Component({
    selector: 'app-event-card',
    standalone: true,
    templateUrl: './event-card.component.html',
    styleUrl: './event-card.component.css',
    imports: [EventDetailsPopupComponent]
})
export class EventCardComponent {
  @Input() timeline_event!: IEvent
  show_event_details: boolean = false;
  constructor(private _timelineService: TimelineService) {
  }

  ngOnChanges() {
    
  }

  openEventDetails(): void {
    this.show_event_details = true;
    this._timelineService.setShowEventDetails(true)
  }

  closeEventDetails(): void {
    this.show_event_details = false;
    this._timelineService.setShowEventDetails(false)
  }
}
