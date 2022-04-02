
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-root',                 // HTML tag for this component
  templateUrl: './app.component.html',  // template connection for this component
  styleUrls: ['./app.component.css']    // styles for the template
})

export class AppComponent 
{
  lastTaskId: number;
  tasks: Array<Task>;
  completedTasks: Array<Task>;

  public constructor() 
  {
    this.lastTaskId = 0;
    this.tasks = [];
    this.completedTasks = [];
  }

  public addTask( myForm: NgForm ) 
  {
    let data: string = myForm.value.task;
    let newId: number = this.lastTaskId++;
    if( data.length < 1 ) return;

    let task: Task = {
      id: newId,
      title: data,
      isDone: false
    };
    this.tasks.push( task );
  }

  public onCompleteTask( task: Task ): void 
  {
    let taskIndex = this.tasks.findIndex( el => el.id == task.id );
    if( taskIndex < 0 ) return;
    
    task.isDone = true;    
    this.completedTasks.push( task );
    this.tasks.splice( taskIndex, 1 );
  }

  public onDeleteTask( task: Task ): void 
  {
    if(!task.isDone)
    {
      this.tasks = this.tasks.filter( el => el.id != task.id);
      return;
    }

    this.completedTasks = this.completedTasks.filter( el => el.id != task.id);
  }
}
