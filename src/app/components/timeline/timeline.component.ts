import { Component, Input, SimpleChanges } from '@angular/core';
import { IEvent } from '../../services/timeline/timeline.service';
import { EventCardComponent } from "../event-card/event-card.component";

@Component({
    selector: 'app-timeline',
    standalone: true,
    templateUrl: './timeline.component.html',
    styleUrl: './timeline.component.css',
    imports: [EventCardComponent]
})
export class TimelineComponent {
  @Input() timeline_events: IEvent[] = [];

  ngOnChanges(changes: SimpleChanges) {
  }

 
}
