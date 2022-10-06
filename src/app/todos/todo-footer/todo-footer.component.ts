import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { AppState } from '../../app.reducer';
import { tiposFiltros, accionFiltrar } from 'src/app/filterdelet/filter.action';
import * as actions from 'src/app/filterdelet/filter.action';
import { limpiarCompletados } from '../todo.action';
import { Todo } from '../models/todo.models';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

filtroActual:actions.tiposFiltros = 'all';
// filtroActual:actions.Filtros = { tipos: 'completado' }//prueba
filtros: actions.tiposFiltros[] = ['all', 'completado', 'pendiente']
// filtros: actions.tiposFiltros = 'all'//prueba
pendientes:number = 0;

constructor( private storeFooter:Store<AppState> ) { }

ngOnInit(): void {
  this.storeFooter
  // "filters" accesa a la informacion del reducer
  .subscribe( ({ todos, filter }) => {
      this.filtroActual = filter;
      this.pendientes = todos.filter( todo => todo.completado === false ).length;
  });
}

  cambiarFiltro( filter:tiposFiltros ){
  // cambiarFiltro( filter:actions.Filtros ){//prueba
    this.storeFooter.dispatch( accionFiltrar({ filter }) );
  }

  funLimpCompletados () {
    this.storeFooter.dispatch (limpiarCompletados());
  }

}
