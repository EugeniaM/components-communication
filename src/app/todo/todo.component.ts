import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnDestroy
} from '@angular/core';

import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, OnDestroy {
  @Input() todo: Todo;
  @Input() title: string;
  @ViewChild('titleElem') titleElem: ElementRef;

  constructor() {
    console.log('From constructor!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('From ngOnChanges!');
    console.log('From changes!', changes);
  }

  ngOnInit() {
    console.log('From ngOnInit!');
    console.log('Title text', this.titleElem.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('From ngDoCheck!');
  }

  ngAfterViewInit() {
    console.log('From ngAfterViewInit!');
    console.log('Title text', this.titleElem.nativeElement.textContent);
  }

  ngOnDestroy() {
    console.log('From ngOnDestroy!');
  }

}
