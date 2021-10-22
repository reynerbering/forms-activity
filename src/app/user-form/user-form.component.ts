import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as bcrypt from 'bcryptjs';



@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  display : boolean = false;
  userDetails ={
    email : null ,
    username : null,
    firstName : null,
    lastName : null,
    password : "" ,
  };

  salt = bcrypt.genSaltSync(10);
  pass = bcrypt.hashSync(this.userDetails.password, this.salt);


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(v: NgForm){
    console.log(v.value,v.valid);
    console.log(this.userDetails);
    this.display=true;
  }
  onEmailChange(change: any){
    console.log(change.value);
  }


 
}