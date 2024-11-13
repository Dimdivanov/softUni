import { Component, OnDestroy, OnInit } from '@angular/core';
import { imgUrl, titles, toDoList } from '../data/myData';
import { ChildComponentTestComponent } from './child-component-test/child-component-test.component';

@Component({
  selector: 'app-new-component-test',
  standalone: true,
  imports: [ChildComponentTestComponent],
  templateUrl: './new-component-test.component.html',
  styleUrl: './new-component-test.component.css',
})
export class NewComponentTestComponent implements OnInit, OnDestroy {
  localTasks: { toDo: string; complete: boolean }[] = toDoList;
  //data binding attributes, classes and using boolean
  isComplete = false;
  completedTask = 'completed-green';
  logo = imgUrl;
  //sending @Input from parent to child - here we send a title
  title = titles;
  //receive the message @Output
  message = '';
  receiveMessage($event: string) {
    this.message = $event;
  }

  ngOnInit(): void {
    console.log('created');
  }
  ngOnDestroy(): void {
    console.log('deleted');
  }

  onDone(toDo: string) {
    const task = this.localTasks.find((task) => task.toDo === toDo);
    if (task) {
      task.complete = !task.complete;
    }
    console.log(task);
    this.completedTask = 'completed-red';
  }
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
