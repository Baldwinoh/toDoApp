import { STATE_NEW } from "ionic-angular/navigation/nav-util";
import { Injectable } from "@angular/core";
@Injectable()
export class ToDo{
    toDoItems=[];
    progressItem=[];
  compleTedItems=[];

    addNewTodo(newItem:string){
     this.toDoItems.push(newItem);
    }

getAllToDoItems():any{
    return this.toDoItems;
}

addToProgress(index:number){
this.progressItem.push(this.toDoItems[index])
this.removeTaskToDo(index)
console.log(this.progressItem)
}

removeTaskToDo(index:number){
this.toDoItems.splice(index,1);

   }

   removeCompltedTask(index:number){
       this.progressItem.splice(index,1);
   }

   getAllProgressTask():any{
  return this.progressItem;

}
addToCompleted(index:number){
    this.compleTedItems.push(this.compleTedItems[index]);
    this.removeCompltedTask(index);
}

getAllToCompleted():any{
    return this.compleTedItems;
}
}