import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.models';
import { tiposFiltros } from 'src/app/filterdelet/filter.action';

@Pipe({
  name: 'filtroTodo'
})
export class filtroPipe implements PipeTransform {

  transform(todos: Todo[], filter: tiposFiltros ): Todo[] {
  // transform(todos: Todo[], filter: Filtros ): Todo[] {//prueba

    switch( filter ){
    // switch( filter.tipos ){//prueba
      case 'completado':
        return todos.filter( todo => todo.completado === true );
      case 'pendiente':
        return todos.filter( todo => todo.completado === false );
      default:
        return todos;
    }

  }

}
