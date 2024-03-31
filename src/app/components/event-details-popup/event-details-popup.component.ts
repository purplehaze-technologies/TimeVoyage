import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEvent } from '../../services/timeline/timeline.service';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-event-details-popup',
  standalone: true,
  imports: [YouTubePlayer],
  templateUrl: './event-details-popup.component.html',
  styleUrl: './event-details-popup.component.css'
})
export class EventDetailsPopupComponent {
  @Input() event!: IEvent;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  constructor() {

  }
  onCloseClick(): void {
    this.close.emit();
  }

}
