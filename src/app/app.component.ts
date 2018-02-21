import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos = [];
  newTodoTitle = '';
  newTodoDescription = '';

  onAddTodo() {
    this.todos.push({
      title: this.newTodoTitle,
      description: this.newTodoDescription
    });
  }
}
