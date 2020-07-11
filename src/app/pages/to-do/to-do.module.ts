import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoRoutingModule } from './to-do-routing.module';
import { ToDoComponent } from './to-do/to-do.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';

@NgModule({
  declarations: [ToDoComponent, ToDoItemComponent],
  imports: [CommonModule, ToDoRoutingModule],
})
export class ToDoModule {}
