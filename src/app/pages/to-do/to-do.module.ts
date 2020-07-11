import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoRoutingModule } from './to-do-routing.module';
import { ToDoComponent } from './to-do/to-do.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatRippleModule} from "@angular/material/core";

@NgModule({
  declarations: [ToDoComponent, ToDoItemComponent],
  imports: [CommonModule, ToDoRoutingModule, FormsModule, MatRadioModule, MatIconModule, MatRippleModule],
})
export class ToDoModule {}
