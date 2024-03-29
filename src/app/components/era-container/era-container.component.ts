import { Component } from '@angular/core';
import { EraPanelComponent } from "../era-panel/era-panel.component";
import { IEra, TimelineService } from '../../services/timeline/timeline.service';
import { CommonModule } from '@angular/common';
import { MouseScrollDirective } from '../../directives/mouse-scroll/mouse-scroll.directive';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-era-container',
    standalone: true,
    templateUrl: './era-container.component.html',
    styleUrl: './era-container.component.css',
    imports: [EraPanelComponent, CommonModule, MouseScrollDirective]
})
export class EraContainerComponent {
  subscriptions: Subscription[] = []
  eras: IEra[] = this._timelineService.getEraData()
  selected_era: IEra | undefined
  selected_index: number = -1 
  constructor(private _timelineService: TimelineService) { }

  ngOnInit() {
    const s1 = this._timelineService.selectedEra.subscribe(era => {
      this.selected_era = era
      console.log("selected_era", this.selected_era)
    })
    this.subscriptions.push(s1)
    const s2 = this._timelineService.selectedEraIndex.subscribe(index => {
      this.selected_index = index
      // console.log("selected_index", this.selected_index)
    })

    this.subscriptions.push(s2)
  }

  selectEra(era: IEra, index: number) {
    this._timelineService.setSelectedEra(era, index)
  }
  onMouseWheel(event: WheelEvent, era: IEra, index: number) {
    event.preventDefault();
    const is_selected = this.selected_index == index ? true : false 
    if (!is_selected) {
      this.selectEra(era, index)
    }
    
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe()
    });
  }
  
}
