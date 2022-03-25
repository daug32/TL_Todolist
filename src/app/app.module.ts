import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// include components 
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';

// module declaration
@NgModule({
  declarations: [           // array of components that this module declares
    AppComponent, 
    TaskComponent
  ],

  imports: [                // array of modules used in this module
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  providers: [],            // array of servises like backend services
  bootstrap: [AppComponent] // this component will be loaded first when this module is loaded
})
export class AppModule { }