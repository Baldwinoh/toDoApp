import { Component } from '@angular/core';
import { ToDo } from './../../app/service/todo.service';

/**
 * Generated class for the DoingListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'doing-list',
  templateUrl: 'doing-list.html'
})
export class DoingListComponent {
  progressItems=[];
  text: string;

  constructor(private todo:ToDo ) {
   this.progressItems = this.todo.getAllProgressTask();
   
  }

 addCompletedTask(index:number){

  this.todo.addToProgress(index);
 }

}
