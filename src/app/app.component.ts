import { Component } from '@angular/core';
import { TodoItem } from './interfaces/todo-item.interface';
import { todoList } from './mock.data/mock-todo.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fix-todo';

  todoList:TodoItem[] = todoList;
  
  addItem(value: string) {    
    this.todoList.push({ title: value });
  }
}
