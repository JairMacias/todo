import { Action, createReducer, on, State } from '@ngrx/store';
import { crear, editar, toggle, eliminar, limpiarCompletados, toggleAllCompletedAction } from './todo.action';
import { Todo } from './models/todo.models'
// import { state } from '@angular/animations';

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
  on(eliminar, (state, { id }) =>  state.filter( todo => todo.id != id ) ),

  on(toggle, (state,  { id }  ) => {
    return state.map( todoToggle => {
      if( todoToggle.id === id ) return{ ...todoToggle, completado: !todoToggle.completado };
      return todoToggle;
    });
  }),
  on(toggleAllCompletedAction, state => {
    return state.map( todo => {
      return {...todo, completado: !todo.completado};
    });
  }),
  on(editar, (state, { id, texto }) => {
    return state.map( todoEditar => {
      if( todoEditar.id === id ) return { ...todoEditar, texto };
      return todoEditar;
    });
  }),
  on( limpiarCompletados, state => {
    return state.filter( todo => !todo.completado );
  }),





);

  export function todoReducer (state:Array<Todo> = estadoInicial, action:Action) {
    return _todoReducer(state, action);
  };

  // on(toggle, (state, { id }) => {
  //   return state.map( (mapTodo):Todo =>{

  //     if (mapTodo.id === id ){
  //       return {
  //         ...mapTodo ,
  //         completado: !mapTodo.completado
  //       } as Todo ;
  //     }else{
  //       return mapTodo;
  //     }

  //   });
  // }),
