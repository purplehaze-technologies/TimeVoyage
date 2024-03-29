import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EraContainerComponent } from "./components/era-container/era-container.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, EraContainerComponent]
})
export class AppComponent implements OnInit {
  title = 'TimeVoyage';

  constructor() { }
  ngOnInit() {
  }
}
