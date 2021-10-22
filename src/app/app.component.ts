import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms-activity';
  job = "";
  secNumber = "";
  phoneNum = "";
  age = "";
  email = "";

  // recievers for child data transfers (output and event emitters)
  recieveJobData($event : any){
    this.job= $event;
    this.secNumber= $event;
    this.phoneNum= $event;
    this.age= $event;
    this.email= $event;
  }
}
