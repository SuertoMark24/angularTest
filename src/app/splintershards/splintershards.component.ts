import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-splintershards',
  templateUrl: './splintershards.component.html',
  styleUrls: ['./splintershards.component.css']
})
export class SplintershardsComponent implements OnInit {

  readonly CoinUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&ids=splinterlands&order=market_cap_desc&per_page=100&page=1&sparkline=false';
 
  readonly spsurl = 'https://api.splinterlands.io/players/balances?username=darkcommander&username=darkcommander&username=javarice&username=javarice01&username=javarice02&username=javarice03&username=javarice04&username=javarice05&username=javarice06&username=javarice07&username=javarice08'
 
  constructor(private service:SharedService , private http: HttpClient ) { }

  SPS:any= []
  data:any= []

  ngOnInit(): void {

    const url2 = this.spsurl;
    this.http.get(url2).subscribe((res)=>{
      this.SPS = res;
        this.SPS = this.SPS.filter((d:any) => d.token == "SPS" )
      // console.log(this.data)   
    })

    const url = this.CoinUrl;
    this.http.get(url).subscribe((res)=>{
      this.data = res
      // console.log(this.data)

    })

  }

  formatPrice(value: number) {
    let val = (value/1)
    return val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
  }


  totalPrice() {
    let total = 0;
    for(let data of this.SPS){
     

      total += parseFloat(data.balance == "" ? 0 : data.balance);
      
    }
    return this.formatPrice(total);
  }


  getTotalPrice(){
    
    let total2 = 0;
    let total = 0;

    for(let data of this.SPS){
     

      total += parseFloat(data.balance == "" ? 0 : data.balance);
      
    }
    for(let data of this.data){
     

      total2 = (data.current_price);
      
    }

    return total2 * total;

  }

  
  
  reloadCurrentPage(){

    const url2 = this.spsurl;
    this.http.get(url2).subscribe((res)=>{
      this.SPS = res;
        this.SPS = this.SPS.filter((d:any) => d.token == "SPS" )
      // console.log(this.data)   
    })

    const url = this.CoinUrl;
    this.http.get(url).subscribe((res)=>{
      this.data = res
      // console.log(this.data)

    })

    this.getTotalPrice();
    this.totalPrice();
  }

}
