import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpwd',
  templateUrl: './resetpwd.component.html',
  styles: [
    `
      .resetPwd{
        min-height: 350px;
        }
      .resetBody{
        min-height: 250px;
        position: relative;
        padding-top: 70px;
      }
      .resetBody>img{
        position: absolute;
        top: -80px;
        left: 35%;
      }
      .resetBody h3{
        font-family: 'Montserrat', 'sans-serif';
        font-size: 25px;
        font-weight: 600;
        color: rgb(88, 89, 90);
      }
      .resetBody p{
        font-family: 'Montserrat', 'sans-serif';
        font-size: 14px;
        color: rgb(34, 34, 34);
      }
    .resetBody>.resetBtn{
      background: rgb(0, 220, 109);
      border-color: rgb(0, 220, 109);
      color: #ffffff;
      text-transform: uppercase;
      min-width: 150px;
      margin-top:20px;
    }
    `
  ]
})
export class ResetpwdComponent implements OnInit {
  resetForm = this.fb.group({
    newPwd: ['', Validators.required],
    confirmPwd: ['', Validators.required]
  });
  passType:string = 'password';
  passShown:boolean = false;
  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
  }
  isFieldInvalid(field:string){
    return(
      (!this.resetForm.get(field)?.valid && this.resetForm.get(field)?.touched)
    );
  }
  onSubmit() {
    if(this.resetForm.valid){
      this.router.navigate(['/login']);
    }
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
