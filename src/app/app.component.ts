
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskModel } from 'src/models/taskModel';

@Component({
  selector: 'app-root',                 // HTML tag for this component
  templateUrl: './app.component.html',  // template connection for this component
  styleUrls: ['./app.component.css']    // styles for the template
})

export class AppComponent 
{
  lastTaskId: number;
  tasks: Array<TaskModel>;
  completedTasks: Array<TaskModel>;

  constructor() 
  {
    this.lastTaskId = 0;
    this.tasks = [];
    this.completedTasks = [];
  }

  addTask( myForm: NgForm ) 
  {
    let data: string = myForm.value.task;
    let newId: number = this.lastTaskId++;
    if( data.length < 1 ) return;

    this.tasks.push( new TaskModel( newId, data ) );
  }

  onCompleteTask( id: number ): void 
  {
    let taskId = this.tasks.findIndex( el => el.id == id );
    if( taskId < 0 ) return;
    
    this.completedTasks.push( this.tasks[ taskId ] );
    this.tasks.splice( taskId, 1 );
  }

  onDeleteTask( id: number ): void 
  {
    this.tasks = this.tasks.filter( el => el.id != id );
  }
}
