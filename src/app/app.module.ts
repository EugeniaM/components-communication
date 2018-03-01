import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoComponent } from './todo/todo.component';
import { CustomBorderDirective } from './directives/custom-border.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    TodoComponent,
    CustomBorderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
