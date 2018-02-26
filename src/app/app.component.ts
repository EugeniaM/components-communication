import { Component } from '@angular/core';

import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Array<Todo>;

  constructor() {
    this.todos = [{ title: 'Test1', description: 'Testtest1' }];
  }

  onTodoAdded(todoData: {newTodoTitle: string, newTodoDesc: string}) {
    this.todos.push({
      title: todoData.newTodoTitle,
      description: todoData.newTodoDesc
    });
  }
}
