import { Component, OnInit } from '@angular/core';
import { AuthService } from "./auth/auth.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
    `
      .myFooter{
        min-width: 100vw;
        padding: 15px 0px 8px;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.5);
        background-color: rgb(255, 255, 255);
        font-weight: 500;
        color: rgb(64, 77, 166);
        font-family: 'Montserrat', sans-serif;
      }
      .footLinks{
        display: flex;
        justify-content:flex-start;
        color: rgb(64, 77, 166);
        padding-left: 0px;
      }
      .myFooter p{
        font-size: 12px;
        text-transform: uppercase;
      }
      .footLinks li{
        list-style: none;
      }
      .footLinks li a{
        font-size: 14px;
        color: rgb(64, 77, 166);
        text-decoration: none;
      }
      .footLinks li a:hover{
        text-decoration: none;
        color: #d31680;
      }
      .socilLinks{
        max-width: 220px;
        display: flex;
        justify-content: space-between;
        padding-left: 0px;
      }
      .socilLinks li{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 30px;
        height: 30px;
        background-color: rgb(64, 77, 166);
        list-style: none;
        margin-left: 10px;
        text-align: center;
      }
      .socilLinks li a{
        height: 100%;
        width: 100%;
        color: #FFFFFF;
      }
      .socilLinks > li:hover{
        background-color: #d31680;
      }
      /* Media Queries*/
      @media only screen and (min-width: 992px){
        .myFooter{
          position: fixed;
          bottom: 0;
        }
        .myCopy{
          text-align: center;
        }
      }
      @media only screen and (max-width: 991px){
        .footLinks{
          justify-content: center !important;
        }
      }
      @media only screen and (min-width: 768px) {
        .socilLinks{
          float: right;
        }
      }
      @media only screen and (max-width: 767px){
        .socilLinks{
          margin: 0 auto;
          justify-content: center !important;
        }
        .myFooter p{
          text-align: center !important;
        }
      }
      @media only screen and (max-width: 374px) {
        .footLinks li a{
          font-size: 12px;
        }
        .myFooter p{
          font-size: 11px;
        }
      }
    `
  ]
})
export class FooterComponent{
  fullYear = new Date().getFullYear();
  constructor(private authService: AuthService) { }

  onLogout() {
    this.authService.logout();
  }
}
