import { Component, ViewChildren, QueryList } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'div.container.app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  description: string;
  lastMessage: string;
  @ViewChildren(ChildComponent) childComponents: QueryList<ChildComponent>;
 
  constructor() {
    this.title = 'Mastering Angular - Chapter 4, Example 4';
    this.description = 'This is an example for how to reference existing components from a parent component.';
    this.lastMessage = 'Waiting for child messages ...';
  }
  onFirstChildComponentMessageReceived($event: string) {
    alert($event);
  }
  setSecondChildComponentProperties() {
    this.childComponents.last.myText = "The second child component goes here.";

    this.childComponents.last.onChildMessage.subscribe((message:
      string) => {
      this.lastMessage = message + ' (the message will be reset in 2 seconds)';

      setTimeout(() => { this.lastMessage = 'Waiting for child messages ...'; }, 2000);
    });
  }
}
