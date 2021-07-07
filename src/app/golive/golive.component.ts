import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-golive',
  templateUrl: './golive.component.html',
  styles: [
    `
      .myUpload, .myCheck{
        max-width: 800px;
      }
      .uploadBtn{
        border: solid 1px rgb(151, 151, 151);
        background-color: rgb(103, 121, 241);
        padding: 20px 10px;
        padding-bottom: 20px;
        color: rgb(255, 255, 255);
        font-size: 14px;
      }
      .uploadInput{
        box-sizing: border-box;
        padding: 20px 30px 0px;
      }
      .downBtn{
        border: none;
        color: #FFFFFF;
        cursor: pointer;
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
        font-weight: 500;
        padding: 15px 20px;
        border-radius: 13px;
        background-color: rgb(95, 212, 84);
      }
      .downBtn:hover{
        background-color: #d31680;
      }
    `
  ]
})
export class GoliveComponent implements OnInit {
  goForm = this.fb.group({
    testUpload:['', Validators.required],
    termsCheck:['', Validators.required]
  })
  private formSubmitAttempt=false;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  isFieldInvalid(field: string) {
    return (
      (!this.goForm.get(field)?.valid && this.goForm.get(field)?.touched) ||
      (this.goForm.get(field)?.untouched && this.formSubmitAttempt)
    );
  }
  onSubmit(){

  }
}
