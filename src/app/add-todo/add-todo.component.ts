import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() onAddTodo = new EventEmitter<{newTodoTitle: string, newTodoDesc: string}>();
  @ViewChild('newDescInput') descriptionInput: ElementRef;
  // newTodoTitle: string;
  newTodoDescription: string;

  constructor() { }

  ngOnInit() {
  }

  addTodo(newTitleInput: HTMLInputElement) {
    this.onAddTodo.emit({
      newTodoTitle: newTitleInput.value,
      newTodoDesc: this.descriptionInput.nativeElement.value
    });
  }
}
