import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'div[app-child]',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  private static instanceCount: number = 0;
  instanceId: number;
  @Input() myText: string;
  @Output() onChildMessage = new EventEmitter<string>();
  constructor() {
    ChildComponent.instanceCount += 1;
    this.instanceId = ChildComponent.instanceCount;
    this.myText = 'This is the default child component text.'; 
  }
  onClick() {
    this.onChildMessage.emit(`Hello from ChildComponent with instance id: ${this.instanceId}`);
  }

  ngOnInit() {
  }

}
