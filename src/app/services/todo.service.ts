import { Injectable } from '@angular/core';

import { TodoItem } from '../interfaces/todo-item.interface';
import { todoList } from '../mock.data/mock-todo.data';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoList: TodoItem[] = todoList;

  constructor() { }

  getTodoList(): TodoItem[] {
    return this.todoList;
  }

  addItem(value: string) {    
    this.todoList.push({ title: value });
  }


}
