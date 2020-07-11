import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../../../shared/model/to-do-item';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent implements OnInit {
  todoList: ToDoItem[] = [new ToDoItem()];

  constructor() {}

  ngOnInit(): void {}

  addToDo() {
    // To be able to integrate the click outside functionality as well
    setTimeout(
      () => {
        this.todoList.push(new ToDoItem());
      }, 1
    )
  }

  removeToDo(todoIndex: number) {
    if (this.todoList.length <= todoIndex) {
      this.todoList.splice(todoIndex, 1);
    }
  }
}
