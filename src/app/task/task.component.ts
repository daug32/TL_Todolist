import { Component, Output, Input, EventEmitter } from '@angular/core';
import { TaskModel } from 'src/models/taskModel';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent 
{
  @Input() task!: TaskModel;
  @Input() showButtons: boolean = true;
  
  @Output() onDeleteTask = new EventEmitter<number>();
  @Output() onCompleteTask = new EventEmitter<number>();

  delete = () => this.onDeleteTask.emit( this.task.id );
  complete = () => this.onCompleteTask.emit( this.task.id );
}
