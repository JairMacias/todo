import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { FooterComponent } from '../footer/footer.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { filtroPipe } from './pipes/filter-todo.pipe';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FooterComponent,
    TodoAddComponent,
    TodoFooterComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoPageComponent,
    filtroPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    FooterComponent,
    TodoPageComponent
  ]
})
export class TodosModule { }
