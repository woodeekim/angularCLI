import {Component, Input, OnInit} from '@angular/core';
import {Todo} from './share/todo.model';

@Component({
  selector: 'app-todo',
  template: `
    <input type="checkbox"  [checked]="todo.done">{{todo.text}}
  `,
  styles: [`
  host {
    display: block;
    padding: 16px;
    background-color: white;
    color: darkgray;
   }

  `]
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  constructor() { }

  ngOnInit(): void {
  }

}
