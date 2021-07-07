import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../auth/auth.service";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [
    `
      .loginCont > .card{
        max-width: 790px;
    }
      .contName{
        left: 25px;
      }
      .myInputs{
        margin-top: 30px;
      }
      .form-check a{
        color:#40499e;
        text-decoration: none;
      }
      .form-check a:hover{
        color: #d31680;
        text-decoration: none;
      }
      .showPwd{
        right: 12px;
      }
    `
  ]
})
export class SignupComponent implements OnInit {
  formSubmitAttempt:boolean=false;
  registerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    country: ['', Validators.required],
    language: ['', Validators.required],
    emailAddress: ['', Validators.required],
    mobileNo: ['', Validators.required],
    workFor: ['', Validators.required],
    company: ['', Validators.required],
    password: ['', Validators.required],
    confirmPwd: ['', Validators.required],
    terms: ['', Validators.required]
  })
  passType:string = 'password';
  passShown:boolean = false;

  constructor(private fb:FormBuilder) {
  }
  isFieldInvalid(field:string){
    return(
      (!this.registerForm.get(field)?.valid && this.registerForm.get(field)?.touched) ||
      (this.registerForm.get(field)?.untouched && this.formSubmitAttempt)
    );
  }
  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.registerForm.value)
  }
  showPwd(){
    if(this.passShown){
      this.passType = 'password';
    }else{
      this.passType = 'text';
    }
    this.passShown = !this.passShown
  }
}
