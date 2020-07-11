import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoItem } from '../../../shared/model/to-do-item';

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
    this.toDoItemTempTitle = this.toDoItem.title;
    this.toDoItem.editing = true;
  }

  saveToDo() {
    this.toDoItem.editing = false;
    if (this.toDoItemTempTitle.trim()) {
      //  Save the Todo
      this.toDoItem.title = this.toDoItemTempTitle;
    }
  }

  deleteToDo() {
    this.toDoItemDelete.emit();
  }
}
