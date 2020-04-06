import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  newTodo = '';

  @Output() onNewTodo = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.onNewTodo.emit(this.newTodo);
    this.newTodo = '';
  }

}
