import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component-test',
  standalone: true,
  imports: [],
  templateUrl: './child-component-test.component.html',
  styleUrl: './child-component-test.component.css',
})
export class ChildComponentTestComponent {
  @Input() title: string | null = null;

  message = 'Hello from child component';
  @Output() messageEvent = new EventEmitter<string>();
  sendMessage() {
    this.messageEvent.emit(this.message);
  }
}
