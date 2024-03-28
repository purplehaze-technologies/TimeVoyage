import { Injectable } from '@angular/core';
import eventsData from '../../data/events.json'

@Injectable({
  providedIn: 'root'
})
export class TimelineService {


// Stone Age: 3.3 million to 5,000 years ago.
// Bronze Age: 5,000 to 1,400 years ago (1,200 BC)
// Iron Age: 1,200 BC to 500 BC.
// Classical Era: 500 BC to 500 AD.
// Medieval Era: 500 AD to 1500 AD.
// Early Modern Era: 1500 AD to 1800 AD.
// Modern Era: 1800 AD to present.
  constructor() { }
  private events = eventsData
  getData() {
    return this.events
  }
}
