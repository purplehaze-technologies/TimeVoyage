import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEvent } from '../../services/timeline/timeline.service';

@Component({
  selector: 'app-event-details-popup',
  standalone: true,
  imports: [],
  templateUrl: './event-details-popup.component.html',
  styleUrl: './event-details-popup.component.css'
})
export class EventDetailsPopupComponent {
  @Input() event!: IEvent;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  onCloseClick(): void {
    this.close.emit();
  }
}
