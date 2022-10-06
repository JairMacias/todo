import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Todo } from '../models/todo.models';
import { AppState } from '../../app.reducer';
import { tiposFiltros } from 'src/app/filterdelet/filter.action';
// import { take } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  todosList: Todo[] = [];
  currentFilter:tiposFiltros = 'all'
  // currentFilter:Filtros = { tipos: 'all' } //prueba


  constructor( private storeList: Store<AppState> ) {

  }

  ngOnInit(): void {
    this.storeList
      .subscribe( ({todos, filter}) => {
        this.todosList = todos;
        this.currentFilter = filter ;
      });
  }


};
