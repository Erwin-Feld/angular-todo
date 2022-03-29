import { Component, OnInit } from '@angular/core';

import { TodoItem } from 'src/app/interfaces/todo-item.interface'; 
import { TodoService } from 'src/app/services/todo.service';
import { todoList } from '../../mock.data/mock-todo.data'


@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  todoList:TodoItem[] = this.todoService.getTodoList()
  
  addItem(value: string) {    
    this.todoService.addItem(value)
  }

}
