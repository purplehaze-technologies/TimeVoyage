import { Component, Input, SimpleChanges } from '@angular/core';
import { TimelineComponent } from "../timeline/timeline.component";
import { IEra, IEvent, TimelineService } from '../../services/timeline/timeline.service';

@Component({
    selector: 'app-era-panel',
    standalone: true,
    templateUrl: './era-panel.component.html',
    styleUrl: './era-panel.component.css',
    imports: [TimelineComponent]
})
export class EraPanelComponent {
  @Input() era!: IEra
  @Input() is_selected: boolean = false
  era_events: IEvent[] = []

  constructor(private _timelineService: TimelineService) {
    
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['era']) {
      this.getEraEvents()
    }
  }
  getEraEvents() {
    this.era_events = this._timelineService.getEraEvents(this.era.id)
  }
}
