import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navlinks',
  templateUrl: './navlinks.component.html',
  styles: [
    `
      .navLinks{
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
      }
      .navLinks>li>a{
        color: rgb(17, 58, 94);
      }
      .navLinks>li{
        list-style: none;
      }
      .navLinks>li>a.active{
        background-color: rgb(103, 121, 241);
        color: #fff;
      }
      .navLinks>li:hover>a{
        background-color: rgb(103, 121, 241);
        color: #fff;
      }
    /*media queries*/
    @media only screen and (min-width: 992px) {
      .navLinks{
        display: flex;
        justify-content: space-between;
        margin-bottom: 0px;
      }
      .navLinks>li>a{
        padding: 10px 28px 10px 19px;
        line-height: 50px;
        text-decoration: none;
        color: rgb(17, 58, 94);
      }
    }
      @media only screen and (max-width: 991px){
        .navLinks{
          padding-left: 0px !important;
        }
        .navLinks>li>a{
          padding: 12px 32px 12px 17px;
          font-size: 14px;
          text-align: left;
          border-right: solid 0px;
          line-height: 25px;
          border-bottom: 1px solid;
          border-bottom-color: rgba(0, 0, 0, 0.13);
          position: static;
        }

      }
    `
  ]
})
export class NavlinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
