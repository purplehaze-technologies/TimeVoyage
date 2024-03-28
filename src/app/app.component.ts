import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimelineService } from './services/timeline/timeline.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'TimeVoyage';
  constructor(private _timelineService: TimelineService) {

    
  }
  ngOnInit() {
    console.log(this._timelineService.getData())
  }
}
