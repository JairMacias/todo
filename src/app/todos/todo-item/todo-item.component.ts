import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { compileFactoryFunction } from '@angular/compiler';


import { Todo } from '../models/todo.models';
import { AppState } from '../../app.reducer';
import * as action from '../todo.action'
import { toggle } from '../todo.action';



@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})


export class TodoItemComponent implements OnInit {

  @Input() todo: Todo = { id:0, texto:"", completado: false };

  chkCompletado: FormControl ;
  txtInput: FormControl;

  editando: boolean = false;

  //hice un desmadre agregue la linea de abajo para dar un estado base--continua en html
  // completado2: boolean = false;

  constructor( private store: Store <AppState>) {


    this.chkCompletado = new FormControl ( '' );
    this.txtInput = new FormControl ( '' , Validators.required );
    // this.todo.completado
    // this.todo.texto

  // revisa aquiiiiiiiiiiiiiiiiiiiii!!!!!!!!!!!!!!!!!!!!!!!!!!!!



}

ngOnInit(): void {

  this.chkCompletado.setValue( this.todo.completado );
  this.txtInput.setValue(this.todo.texto);

  this.chkCompletado.valueChanges.subscribe( () => {
    this.store.dispatch (action.toggle({ id: this.todo.id }));

    console.log ("completar", this.todo.id)
  });

}

editar(){
  if ( this.txtInput.invalid) {return;}
  this.store.dispatch (action.editar({ id: this.todo.id, texto: this.txtInput.value }));
  // this.txtInput.reset();
}
funEliminar(){
  this.store.dispatch( action.eliminar({ id: this.todo.id }) );
}

}
