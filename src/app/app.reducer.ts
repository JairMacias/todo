import { ActionReducerMap } from '@ngrx/store';

import { Todo } from './todos/models/todo.models';
import { todoReducer } from './todos/todos.reducer';
import { tiposFiltros } from './filterdelet/filter.action';
import { filterReducer } from './filterdelet/filter.reducer';

export interface AppState{
  todos: Todo[],
  filter: tiposFiltros
  // filter: Filtros //prueba
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
}
