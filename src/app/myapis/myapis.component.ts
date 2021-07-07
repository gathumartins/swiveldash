import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myapis',
  templateUrl: './myapis.component.html',
  styles: [
    `
      .pageMain{
        padding: 30px;
      }
      .pageMain h3{
        margin: 0px;
      }
      .myApiCont{
        display: flex;
        justify-content:space-between;
        flex-flow: wrap;
        flex-wrap: wrap;
      }
      .myApi{
        padding:25px;
        max-width: 200px;
        min-height: 300px;
        border: solid 1px rgb(151, 151, 151);
        border-top: 6px solid  rgb(64, 73, 158);
        float: left;
      }
      .myApi h4{
        font-family: 'Montserrat', 'sans-serif';
        font-size: 15px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 2;
        letter-spacing: normal;
        color: rgb(64, 77, 166);
      }
      .myApiCont{
        padding-top: 30px;
        padding-bottom: 30px;
      }
      .myApiImg{
        max-width: 140px;
      }
    `
  ]
})
export class MyapisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
