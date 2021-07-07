import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styles: [
    `
      .mainCont {
        min-height: 100vh;
        min-width: 320px;
        background-image: url("../../assets/img/securebg.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 145px 0px 90px;
      }
      .pageCont{
        margin-top: 100px;
      }
    /*  media queries */

    `
  ]
})
export class SecureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
