import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { IEra, TimelineService } from '../../services/timeline/timeline.service';

@Directive({
  selector: '[appMouseScroll]',
  standalone: true
})
export class MouseScrollDirective {
  constructor(private el: ElementRef, private _timelineService: TimelineService) {}
  @Input() era!: IEra;
  @Input() index: number = -1;
  @HostListener('wheel', ['$event']) onMouseWheel(event: WheelEvent) {
    
    event.preventDefault();
    const scrollableElement = this.el.nativeElement;
    if (!scrollableElement.classList.contains('selected')) {
      this._timelineService.setSelectedEra(this.era, this.index)
      return
    } 
    const scrollStep = 50; // Adjust multiplier for scroll speed    


    // Check if scrolling left and if there's no more space to scroll left
    if (event.deltaY < 0 && scrollableElement.scrollLeft === 0) {
      this._timelineService.selectPrevEra()
      // this._timelineService.resetEra()
      return; // No more space to scroll left
    }

    // Check if scrolling right and if there's no more space to scroll right
    if (event.deltaY > 0 && scrollableElement.scrollLeft >= (scrollableElement.scrollWidth - scrollableElement.clientWidth)) {
      this._timelineService.selectNextEra()
      // this._timelineService.resetEra()
      return; // No more space to scroll right
    }

    if (event.deltaY < 0) {
      scrollableElement.scrollLeft -= scrollStep; // Scroll left
    } else {
      scrollableElement.scrollLeft += scrollStep; // Scroll right
    }
  }

}
