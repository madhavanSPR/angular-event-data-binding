import { Component, VERSION } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = '';

  nameUpdate(event: Event) {
    this.name = (<HTMLInputElement>event.target).value;
  }
}
