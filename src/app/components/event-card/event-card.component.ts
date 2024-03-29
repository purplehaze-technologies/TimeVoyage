import { Component, Input } from '@angular/core';
import { IEvent } from '../../services/timeline/timeline.service';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent {
  @Input() timeline_event: IEvent | undefined
  
  constructor() {
  }

  ngOnChanges() {
    console.log("timeline_event", this.timeline_event)
  }
}
