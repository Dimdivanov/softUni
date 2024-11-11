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
  localTasks: { toDo: string; complete: boolean }[] = toDoList;
  isComplete = false;
  completedTask = false;

  onComplete(toDo: string) {}
  onDelete(toDo: string) {
    this.localTasks = this.localTasks.filter((task) => task.toDo !== toDo);
  }
  onClickAdd(taskInput: string) {
    this.localTasks.push({
      toDo: taskInput,
      complete: false,
    });
  }
}
