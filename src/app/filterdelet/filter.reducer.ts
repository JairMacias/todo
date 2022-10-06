import { Action, createReducer, on } from '@ngrx/store';
import { tiposFiltros, accionFiltrar, } from './filter.action';
import * as actions from 'src/app/filterdelet/filter.action';
import { filter } from 'rxjs';
// import { Action } from 'rxjs/internal/scheduler/Action';


const inicialEstate2: tiposFiltros = 'pendiente'; //<------ original
// const inicialEstate2: ReadonlyArray<tiposFiltros> = [];
// const inicialEstate2: Filtros = { tipos: 'pendiente' }; //prueba

export const _filterReducer = createReducer(inicialEstate2,
  on( accionFiltrar, (state, { filter }) => state), //<------ original
  // on( accionFiltrar, (state, { filter }) => {
  //   switch (filter.type){
  //     case 'tiposFiltros':
  //       return actions.filter
  //     default:
  //       return state
  // }),                                                  //prueba
  //   }
  // on( accionFiltrar, oldState => filter ) //prueba
  );

                     // let qwerty = typeof inicialEstate2

                     // console.log ('tipo ' +qwerty);

// let name = '';

// if (typeof Filtros.name === 'string') {
//   name = person.name;
// }

export function filterReducer( state:any, action:Action ){
  return _filterReducer(state, action);
}

//_________________________________________________________
// export const visibilityFilter = (state = 'SHOW_ALL', action:Action) => {
//   switch (action.type) {
//     case 'SET_VISIBILITY_FILTER':
//       return action.filter
//     default:
//       return state
//   }
// }

//__________________________________
