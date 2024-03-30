import { Injectable } from '@angular/core';
import eventsData from '../../data/events.json'
import eraData from '../../data/era.json'
import { BehaviorSubject } from 'rxjs';

export enum ETimelineMode {
  "YEAR",
  "DECADE",
  "CENTURY",
  "ERA",
}
export interface ITimeline {
  mode: ETimelineMode
}
export interface IEvent {
  id: number
  title: string
  date: string
  description: string
  image: string
  video: string
  era_id: number
}
export interface IEra {
  id: number,
  title: string
  period_from: string
  period_to: string
  color_scheme: string
  image?: string
}


@Injectable({
  providedIn: 'root'
})


export class TimelineService {


  constructor() { }
  private events: IEvent[] = eventsData
  private eras: IEra[] = eraData
   
  private selectedEraSubject = new BehaviorSubject<IEra | undefined>(undefined);
  public selectedEra = this.selectedEraSubject.asObservable()

  private selectedEraIndexSubject = new BehaviorSubject<number>(-1);
  public selectedEraIndex = this.selectedEraIndexSubject.asObservable()
  
  public showEventDetailsSubject = new BehaviorSubject<boolean>(false);
  public showEventDetails = this.showEventDetailsSubject.asObservable()

  
  setSelectedEra(era: IEra, index: number) {
    this.selectedEraSubject.next(era)
    this.selectedEraIndexSubject.next(index)
  }

  selectNextEra() {
    const selected_era_index = this.selectedEraIndexSubject.value
    if (selected_era_index >= this.eras.length - 1) {
      this.resetEra()
    } else {
      const next_era_index = selected_era_index + 1
      const next_era = this.eras[next_era_index]
      this.selectedEraSubject.next(next_era)
      this.selectedEraIndexSubject.next(next_era_index)
    }
    
  }

  selectPrevEra() {
    const selected_era_index = this.selectedEraIndexSubject.value
    if (selected_era_index <= 0) {
      this.resetEra()
    } else {
      const next_era_index = selected_era_index - 1
      const next_era = this.eras[next_era_index]
      this.selectedEraSubject.next(next_era)
      this.selectedEraIndexSubject.next(next_era_index)
    }
  }
  resetEra() {
    this.selectedEraSubject.next(undefined)
    this.selectedEraIndexSubject.next(-1)
  }

  getEraEvents(era_id: number) {
    return this.events.filter(ev => ev.era_id == era_id)
  }
  getEraData() {
    return this.eras
  }

  setShowEventDetails(value: boolean) {
    this.showEventDetailsSubject.next(value)
  }
}
