import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as action from '../todo.action'
// import { Action } from 'rxjs/internal/scheduler/Action';
// import { crear } from '../todo.action';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  txtInputAdd: FormControl;

  constructor(private store: Store<AppState>) {
    this.txtInputAdd = new FormControl('', Validators.required );
  }

  ngOnInit(): void {

  }
  agregar(){
    if ( this.txtInputAdd.invalid) {return;}
    this.store.dispatch (action.crear({ texto: this.txtInputAdd.value }));
    this.txtInputAdd.reset();
    // console.log(this.txtInput.value);
    // console.log(this.txtInput.valid);

  }

}
