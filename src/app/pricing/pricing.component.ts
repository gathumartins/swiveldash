import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styles: [
    `
      .pageMain{
        padding: 30px;
      }
      .pageMain h3{
        margin: 0px;
      }
      .myApiCont{
        padding-top: 30px;
        padding-bottom: 30px;
      }
      .myApi{
        padding: 15px 2px;
        width: 100%;
        min-height: 200px;
        border: solid 1px rgb(151, 151, 151);
        border-top: 6px solid  rgb(64, 73, 158);
        float: left;
        transition: all ease 0.3s;
        cursor: pointer;
      }

      .myApi h4{
        font-family: 'Montserrat', 'sans-serif';
        font-size: 1rem;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 2;
        letter-spacing: normal;
        color: rgb(64, 77, 166);
        transition: color ease 0.3s;
      }
      .myApi:hover, .myApi:hover > h4{
        border-top-color: #d31680;
        color: #d31680;
      }
      .priceIcon{
        width: 100%;
        height: 100%;
        padding: 10px;
        max-width: 140px;
        max-height: 140px;
        border-radius: 5px;
        box-shadow: 0 2px 2px 0 rgba(64, 77, 158, 0.12);
        background-color: rgb(103, 121, 241);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background-color ease 0.3s;
      }
      .priceIcon img{
        max-height: 80px;
      }
      .nav-tabs{
        border-bottom: unset !important;
      }
      .nav-tabs .nav-link.active > .priceIcon{
        background-color: #d31680;
      }
      .nav-tabs .nav-link.active, .nav-tabs .nav-link.active h4{
        border-top-color: #d31680;
        color: #d31680;
        border-color: #d31680;
      }
      .myApi:hover > .priceIcon{
        background-color: #d31680;
      }
    /*  media queries*/
      @media only screen and (max-width: 767px) {
        .myApiCont{
          padding: 0 30px !important;
        }
        .myApi{
          min-height: 150px;
        }
        .myApi h4{
          font-size: 0.6rem;
        }
        .priceTabs, .myTitle{
          padding: 0px !important;
        }
        .priceIcon{
          max-height: 80px;
          max-width: 80px;
        }
        .priceIcon img{
          max-height: 60px;
        }
      }
      @media only screen and (max-width: 525px) {
        .pageMain{
          padding: 15px 8px;
        }
        .myApiCont{
          padding: 0px 15px !important;
        }
        .myApi{
          padding: 5px 2px;
          min-height: 100px;
          width: 100%;
        }
        .myApi h4{
          font-size: 0.5rem;
        }
        .priceIcon{
          max-height: 40px;
          max-width: 40px;
        }
        .priceIcon img{
          max-height: 30px;
        }
      }
    `
  ]
})
export class PricingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
