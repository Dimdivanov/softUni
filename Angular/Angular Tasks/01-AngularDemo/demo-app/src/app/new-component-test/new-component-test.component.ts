import { Component } from '@angular/core';
import { toDoList } from '../data/myData';

@Component({
  selector: 'app-new-component-test',
  standalone: true,
  imports: [],
  templateUrl: './new-component-test.component.html',
  styleUrl: './new-component-test.component.css',
})
export class NewComponentTestComponent {
  localTasks = toDoList;
  onClickAdd(taskInput: HTMLInputElement) {
    console.log(taskInput);
  }
}
