import { createAction, props } from '@ngrx/store';

export type tiposFiltros = 'all'|'completado'|'pendiente'

// export interface Filtros {
//   tipos: tiposFiltros;
// }

export const accionFiltrar = createAction(
  '[Filtro] Filtrar todos',
  props<{ filter:tiposFiltros }>()
  // props<{ filter:Boolean }>()
);

// export const accionFiltrar = createAction(// prueba
  // '[Filtro] Filtrar todos',
  // props<{ filter:Filtros }>()
// );
