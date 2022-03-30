
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from './task/shared/task.model';

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

  constructor() 
  {
    this.lastTaskId = 0;
    this.tasks = [];
    this.completedTasks = [];
  }

  addTask( myForm: NgForm ) {
    let data: string = myForm.value.task;
    let newId: number = this.lastTaskId++;
    if( data.length < 1 ) return;

    let task: Task = {
      id: newId,
      data: data
    };
    this.tasks.push( task );
  }

  onCompleteTask( id: number ): void {
    let taskIndex = this.tasks.findIndex( el => el.id == id );
    if( taskIndex < 0 ) return;
    
    this.completedTasks.push( this.tasks[ taskIndex ] );
    this.tasks.splice( taskIndex, 1 );
  }

  onDeleteTask( id: number ): void {
    this.tasks = this.tasks.filter( el => el.id != id );
  }
}
