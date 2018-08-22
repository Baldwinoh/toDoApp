import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToDo } from './../../app/service/todo.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  newItem:string;
  toDoItems=[];
  progressItems=[];



  constructor(public navCtrl: NavController, private todo:ToDo) {

  }
  
  addnewToDo(){
    if(this.newItem !== ''){
    this.todo.addNewTodo(this.newItem)
    this.newItem='';
    this.getAllToDoItems();
  }
  
    }
  
    getAllToDoItems(){
         this.toDoItems=this.todo.getAllToDoItems();
    }
  
    
    addToProgress(index:number){
  this.todo.addToProgress(index);

  
   
    }
  


}
