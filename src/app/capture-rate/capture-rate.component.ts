import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-capture-rate',
  templateUrl: './capture-rate.component.html',
  styleUrls: ['./capture-rate.component.css']
})
export class CaptureRateComponent implements OnInit {
  
  readonly balanceUrl = 'https://api.splinterlands.io/players/details?name=javarice'

  readonly CRURL = 'https://api.splinterlands.io/players/balances?username=darkcommander&username=darkcommander&username=javarice&username=javarice01&username=javarice02&username=javarice03&username=javarice04&username=javarice05&username=javarice06&username=javarice07&username=javarice08'

  readonly Coinurl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&ids=solana&order=market_cap_desc&per_page=100&page=1&sparkline=false';
 
  readonly Coinurl2 = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&ids=usd-coin&order=market_cap_desc&per_page=100&page=1&sparkline=false';
  
  readonly Coinurl3 = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=saitama-inu&order=market_cap_desc&per_page=100&page=1&sparkline=false';
  

  constructor(private service:SharedService , private http: HttpClient ) { }

  CR:any =[];
  crData:any = [];
  USDC:any =[];
  sand:any=[];

  selected!: string;
  data:any = [];
  onSelected(){

  }

  ngOnInit(): void {
    const url2 = this.balanceUrl;
 
    this.http.get(url2).subscribe((res)=>{
      this.CR = res;

    })
    const url3 = this.Coinurl2;
 
    this.http.get(url3).subscribe((res)=>{
      this.USDC = res;

    })
    const url4 = this.Coinurl3;
 
    this.http.get(url4).subscribe((res)=>{
      this.sand = res;

    })


    const url = this.Coinurl;
    this.http.get(url).subscribe((res)=>{
      this.data = res
      // console.log(this.data)

    })
    this.totalPrice;
    this.getTotalPrice;

  }

  reloadCurrentPage(){
    const url3 = this.Coinurl2;
 
    this.http.get(url3).subscribe((res)=>{
      this.USDC = res;

    })

    const url2 = this.balanceUrl;
    this.http.get(url2).subscribe((res)=>{
      this.CR = res;
        // this.DEC = this.DEC.filter((d:any) => d.token == "DEC" )
      // console.log(this.data)   
    })

    const url = this.Coinurl;
    this.http.get(url).subscribe((res)=>{
      this.data = res
      // console.log(this.data)

    })


    this.totalPrice;
    this.getTotalPrice;


    
  }

  // formatPrice(value: number) {
  //   let val = (value/1)
  //   return val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
  // }


  totalPrice() {

    let total = '3,191,724,144.299';

    return total;
   
  }


  getTotalPrice(){
    
    let total2 = 0;
    let total =  3191724144.299;

    for(let data of this.sand){
     

      total2 = (data.current_price);
      
    }

    return total2 * total;

  }


}
