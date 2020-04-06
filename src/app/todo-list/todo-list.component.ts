import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import TodoItem from '../TodoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos: TodoItem[];

  @Output() onRemoveTodo = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  removeTodo(index: number) {
    this.onRemoveTodo.emit(index);
  }

}
