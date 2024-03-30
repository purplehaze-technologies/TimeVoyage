import { Component, Input, SimpleChanges } from '@angular/core';
import { TimelineComponent } from "../timeline/timeline.component";
import { IEra, IEvent, TimelineService } from '../../services/timeline/timeline.service';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-era-panel',
    standalone: true,
    templateUrl: './era-panel.component.html',
    styleUrl: './era-panel.component.css',
    imports: [TimelineComponent, CommonModule]
})
export class EraPanelComponent {
  @Input() era!: IEra
  @Input() is_selected: boolean = false
  @Input() current_index!: number
  @Input() selected_index!: number
  era_events: IEvent[] = []
  title_rotate_classname: string = ""

  constructor(private _timelineService: TimelineService) {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['selected_index']) {
      this.findTitlePosition(this.selected_index)
    }
    if (changes['is_selected'] && this.is_selected) {
      this.getEraEvents()
    }
  }
  getEraEvents() {
    this.era_events = this._timelineService.getEraEvents(this.era.id)

  }

  findTitlePosition(selected_index: number) {
    if (!this.is_selected) {
      if (selected_index == -1) {
        this.title_rotate_classname = "no-rotate"
        return
      }
      if (this.current_index > selected_index) {
        this.title_rotate_classname = "rotate-right"
        return
      } 
      if(this.current_index < selected_index) {
        this.title_rotate_classname = "rotate-left"
        return
      }
    }
  }

  ngOnDestroy(): void {
    
  }


}
