import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import{SharedService} from './shared.service';

declare const myTest: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'angular11';
  readonly decUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&ids=dark-energy-crystals&order=market_cap_desc&per_page=100&page=1&sparkline=false';
  readonly sibaurl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&ids=saitama-inu&order=market_cap_desc&per_page=100&page=1&sparkline=false';
  readonly spsurl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&ids=splinterlands&order=market_cap_desc&per_page=100&page=1&sparkline=false';
  readonly slpurl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&ids=smooth-love-potion&order=market_cap_desc&per_page=100&page=1&sparkline=false';
 
      data:any = []
      id:any
      DEC:any= []
      shib:any = []
      sps:any = []
      slp:any= []
    constructor(private http: HttpClient , private service:SharedService) {

    }

  getDec(){
    const url2 = this.decUrl;
    this.http.get(url2).subscribe((res)=>{
      this.DEC = res;
   
    })
  }
  
  getSps(){
    const url2 = this.spsurl;
    this.http.get(url2).subscribe((res)=>{
      this.sps = res; 
    })
  }

  getShiba(){
  const url2 = this.sibaurl;
    this.http.get(url2).subscribe((res)=>{
      this.shib = res;
     
    })
  }

  getSlp(){
    const url2 = this.slpurl;
    this.http.get(url2).subscribe((res)=>{
      this.slp = res; 
    })
  }
  ngOnInit() {
    this.getDec();
    this.getShiba();
    this.getSps();
    this.getSlp();
    this.Total();
  }

  reloadCurrentPage(){
    this.getDec();
    this.getShiba();
    this.getSps();
    this.getSlp();
  }

  Total(){
    let decTotal = 0; 
    let shibTotal = 0; 
    let spsTotal = 0; 
    let slpTotal = 0; 

    for(let dec of this.DEC){
      decTotal = (dec.current_price);    
    }
    for(let shib of this.shib){
      shibTotal = (shib.current_price);    
    }
    for(let sps of this.sps){
      spsTotal = (sps.current_price);    
    }
    for(let slp of this.slp){
      slpTotal = (slp.current_price);    
    }
    return decTotal + shibTotal + spsTotal + slpTotal;
  }


}
  



  




