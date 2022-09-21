import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Todo } from '../models/todo.models';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})


export class TodoItemComponent implements OnInit {
// angula snipet buscar en plugins extenciones
  @Input() todo: Todo;
  
  chkCompletado: FormControl ;
  txtInput: FormControl;
  
  editando: boolean = false;
  //hice un desmadre agregue la linea de abajo para dar un estado base--continua en html
  completado2: boolean = false;
  
  constructor() {
    this.todo= {id:0,texto:"", completado:false};
    // this.todo.completado = true;
    
    // console.log("consol de todo items " + this.todo.id)
    
    this.chkCompletado = new FormControl ( this.todo.completado );
    this.txtInput = new FormControl ( this.todo.texto, Validators.required );
  
    
    
  
  }
  
  ngOnInit(): void {

    
  }

}
