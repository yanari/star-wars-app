import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `button {
      position: fixed;
      bottom: 1rem;
      right: 1rem;
    }`
  ]
})
export class AppComponent {
  title = 'star-wars-app';
}
