import { Action, createReducer, on } from '@ngrx/store';
import { crear } from './todo.action';
import { Todo } from './models/todo.models'

export const estadoInicial: Todo[] = [
  new Todo ('todo 0'),
  new Todo ('todo 1'),
  new Todo ('todo 2'),
  new Todo ('todo 3'),
  new Todo ('todo 4'),
];

export const _todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, { texto }) => [...state, new Todo(texto) ]),
 
);

export function todoReducer (state:Array<Todo> = estadoInicial, action:Action) {
    return _todoReducer(state, action);
};