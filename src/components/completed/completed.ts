import { Component } from '@angular/core';
import { ToDo } from '../../app/service/todo.service';

/**
 * Generated class for the CompletedComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'completed',
  templateUrl: 'completed.html'
})
export class CompletedComponent {

  text: string;
  completedItens=[];
  constructor(private todo:ToDo) {
    this.completedItens=this.todo.getAllToCompleted();
  }

}
