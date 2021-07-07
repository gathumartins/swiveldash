import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    `
      .myNav{
        position: fixed;
        min-width: 100vw;
        top: 0;
        z-index: 999;
      }
      .navbarTop{
        display: block;
        width: 100%;
        background-color: rgb(64, 77, 166);
        height: 39px;
        margin: 0px auto;
        padding: 0px 0px;
        min-width: 320px;
      }
      .headtoppart {
        display: block;
        width: 100%;
        background-color: rgb(64, 77, 166);
        height: 39px;
        margin: 0px auto;
        padding: 0px 0px;
        min-width: 320px;
      }

      .headertopleft {
        width: 100%;
        text-align: center;
      }
      .address {
        padding: 12px 0px 0px 0px;
        font-size: 12px;
        font-weight: 500;
        color: #FFFFFF;
        font-family: 'Montserrat', sans-serif;
      }

      .address a {
        color: #FFFFFF;
      }

      .address span {
        margin-right: 9px;
        color: #FFFFFF;
      }

      .address i {
        margin-right: 6px;
        margin-left: 6px;
        color: #FFFFFF;
      }
      .myHum {
        cursor: pointer;
        margin: 15px 0 10px 15px;
        color: #d31680;
        font-size: 30px;
        text-align: left;
        position: absolute;
        position: absolute;
        padding: 0px;
        left: 0;
        top: 0;
        z-index: 102;
      }

      .sNav{
        padding-top: 0px;
        padding-bottom: 0px;
        border-bottom:solid thin #40499e;
      }
      .navLogo img {
        max-height: 40px;
      }
      .navbar-light .navbar-toggler{
        border: none;
        border-color: unset;
      }
      .navbar-toggler:focus{
        box-shadow: none !important;
      }
      .offcanvas-start{
        top:39px;
      }
      .offcanvas{
        max-width: 240px;
      }
      .offcanvas-body{
        padding: 0px;
      }
      .offcanvas-header{
        border-bottom: 1px solid rgba(0, 0, 0, 0.13);
      }
      .rightCont{
        padding-left:0px;
        padding-top: 15px;
      }
      .rightCont li{
        list-style: none;
      }
      .miniMenu{
        max-width: 200px;
        padding-left:0px;
        display: flex;
        justify-content: space-between;
        color: #40499e !important;
      }
      .miniMenu li{
        list-style: none;
        margin-left: 10px;
      }
      .miniMenu li a{
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        color: #40499e !important;
        text-decoration: none;
      }
      .miniMenu li a:hover{
        color: #d31680 !important;
      }
      .logout{
        cursor: pointer;
      }
      .mobilelogo{
        height: 30px;
      }
    /*  media queries*/
      @media only screen and (max-width: 991px)  {
        .sNav{
          padding-top: 2px;
          padding-bottom: 1px;
        }
      }
      @media only screen and (max-width: 767px) {
        .sNavInn{
          justify-content: flex-end;
        }
      }
    `
  ]
})
export class NavbarComponent{
  constructor(private authService: AuthService) { }

  onLogout() {
    this.authService.logout();
  }

}
