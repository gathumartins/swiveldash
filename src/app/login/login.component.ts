import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {
  signForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });

  private formSubmitAttempt: boolean = false;
  passType:string = 'password';
  passShown:boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  ngOnInit() {
  }

  isFieldInvalid(field: string) {
    return (
      (!this.signForm.get(field)?.valid && this.signForm.get(field)?.touched) ||
      (this.signForm.get(field)?.untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.signForm.valid) {
      this.authService.login(this.signForm.value);
    }
    this.formSubmitAttempt = true;
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
