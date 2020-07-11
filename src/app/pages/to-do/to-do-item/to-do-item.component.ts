import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoItem, ToDoItemStatus } from '../../../shared/model/to-do-item';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: '[app-to-do-item]',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss'],
})
export class ToDoItemComponent implements OnInit {
  @Input() toDoItem: ToDoItem;
  @Output() toDoItemDelete = new EventEmitter();

  toDoItemTempTitle = '';

  constructor() {}

  ngOnInit(): void {}

  editToDo() {
    // To be able to integrate the click outside functionality as well
    setTimeout(
      () => {
        this.toDoItemTempTitle = this.toDoItem.title;
        this.toDoItem.editing = true;
      }, 1
    )

  }

  saveToDo() {
    this.toDoItem.editing = false;
    if (this.toDoItemTempTitle.trim()) {
      //  Save the Todo
      this.toDoItem.title = this.toDoItemTempTitle;
    } else {
      setTimeout(() => {
        this.toDoItemTempTitle = this.toDoItem.title;
      }, 200);
    }
  }

  deleteToDo() {
    this.toDoItemDelete.emit();
  }

  setToDoItemComplete(event: MatRadioChange) {
    console.log(event);
    this.toDoItem.status = event.value
      ? ToDoItemStatus.completed
      : ToDoItemStatus.open;
  }
}
