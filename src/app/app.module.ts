import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { JobFormComponent } from './job-form/job-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserOutputComponent } from './user-output/user-output.component';
import { JobOutputComponent } from './job-output/job-output.component';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    JobFormComponent,
    UserOutputComponent,
    JobOutputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
