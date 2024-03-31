import { Component, Input, SimpleChanges } from '@angular/core';
import { TimelineComponent } from "../timeline/timeline.component";
import { IEra, IEvent, TimelineService } from '../../services/timeline/timeline.service';
import { CommonModule } from '@angular/common';

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
  filters: any = []
  constructor(private _timelineService: TimelineService) {
    this.filters = this._timelineService.getFilters().map(filter => ({ name: filter, selected: false }))
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

  toggleFilter(filter: any, index: number) {
    this.filters[index].selected = !filter.selected
    const selected_filters = this.filters.filter((filter: any) => filter.selected).map((filter: any) => filter.name);
    if (selected_filters.length > 0) {
      this.era_events = this._timelineService.getEraEventsWithFilter(this.era.id, selected_filters)
    } else {
      this.era_events = this._timelineService.getEraEvents(this.era.id)
    }
  }
  ngOnDestroy(): void {
    
  }


}
