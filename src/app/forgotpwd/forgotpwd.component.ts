import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../auth/auth.service";
import * as $ from "jquery";

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styles: [
    `
      .logOut{
        min-height: 270px;
      }
    `
  ]
})
export class ForgotpwdComponent implements OnInit {
  forgotForm = this.fb.group({
    userName: ['', Validators.required]
  });
  constructor(private fb:FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {
  }
  isFieldInvalid(field:string){
    return(
      (!this.forgotForm.get(field)?.valid && this.forgotForm.get(field)?.touched)
    );
  }
  onSubmit() {
    if(this.forgotForm.valid){
    let myTrig = document.getElementById('fgtPwd')!;

    }
  }
}
