import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {
  display : boolean = false;
  // other way without dependency injection
  // jobForm = new FormGroup ({
    
  //   job: new FormControl('',{
  //     validators: [Validators.required, Validators.minLength(3)],
  //   }),
  //   secNumber: new FormControl('',{
  //     validators: [Validators.required, Validators.minLength(4)],
  //   }),
  //   phoneNum: new FormControl('',{
  //     validators: [Validators.required, Validators.minLength(4)],
  //   }),
  //   age: new FormControl('',{
  //     validators: [Validators.required, Validators.minLength(2)],
  //   }),
  //   email: new FormControl('',{
  //     validators: [Validators.required, Validators.email, Validators.minLength(3)],
  //   }),
    
  // });

  jobForm = this.fb.group({
    job: ['',{ validators: [Validators.required, Validators.minLength(2)],}],
    secNumber: ['',{ validators: [Validators.required, Validators.minLength(4)],}],
    phoneNum: ['',{ validators: [Validators.required, Validators.minLength(4)],}],
    age: ['',{ validators: [Validators.required, Validators.minLength(2)],}],
    email: ['',{ validators: [Validators.required, Validators.email, Validators.minLength(3)],}],
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.jobForm.controls.job.value);
    console.log(this.jobForm.controls.secNumber.value);
    console.log(this.jobForm.controls.phoneNum.value);
    console.log(this.jobForm.controls.age.value);
    console.log(this.jobForm.controls.email.value);
    this.display = true;
  }

  //getters for ngIF directive
  get job(){
    return this.jobForm.controls['job'];
  }
  get secNumber(){
    return this.jobForm.controls['secNumber'];
  }
  get phoneNum(){
    return this.jobForm.controls['phoneNum'];
  }
  get age(){
    return this.jobForm.controls['age'];
  }
  get email(){
    // return this.jobForm.controls.email
    return this.jobForm.controls['email'];
  }

  //value functions to send inputs to parent


}
