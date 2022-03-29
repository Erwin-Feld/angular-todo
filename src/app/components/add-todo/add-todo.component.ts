import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  toDo:string;

  ngOnInit(): void {
  }

  // changeTitle(newTitle: string): void {
  //   this.submit.emit(newTitle);
  // }

  submitValue(event: Event) {
    console.log((event.target as HTMLInputElement).value);
    this.submit.emit((event.target as HTMLInputElement).value);
  }

}
