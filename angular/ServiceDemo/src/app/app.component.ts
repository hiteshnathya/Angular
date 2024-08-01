import { Component } from '@angular/core';
import { TimeService } from './time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentDate:string;
  currentTime:string;
  title = 'ServiceDemo';
  constructor(private timeService:TimeService)
  {
    this.currentDate=this.timeService.getTime().toLocaleDateString();
    this.currentTime=this.timeService.getTime().toLocaleTimeString();

  }
}
