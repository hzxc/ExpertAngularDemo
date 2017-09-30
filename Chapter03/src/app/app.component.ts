import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  description: string;
  constructor() {
    this.title = 'Mastering Angular - Chapter 4, Example 1';
    this.description = 'This is a minimal example for an Angular 2 component with an element tag selector.';
  }
}
