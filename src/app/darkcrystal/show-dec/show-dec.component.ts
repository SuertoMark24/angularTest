import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';




@Component({
  selector: 'app-show-dec',
  templateUrl: './show-dec.component.html',
  styleUrls: ['./show-dec.component.css']
})
export class ShowDecComponent implements OnInit {

  readonly Coinurl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&ids=dark-energy-crystals&order=market_cap_desc&per_page=100&page=1&sparkline=false';
 
  readonly balanceUrl = 'https://api.splinterlands.io/players/balances?username=darkcommander&username=darkcommander&username=javarice&username=javarice01&username=javarice02&username=javarice03&username=javarice04&username=javarice05&username=javarice06&username=javarice07&username=javarice08'

  DEC:any= []
  data:any = []


  constructor(private service:SharedService , private http: HttpClient ) { }

  ngOnInit(): void {

    const url2 = this.balanceUrl;
    this.http.get(url2).subscribe((res)=>{
      this.DEC = res;
        this.DEC = this.DEC.filter((d:any) => d.token == "DEC" )
       
    })
    const url = this.Coinurl;
    this.http.get(url).subscribe((res)=>{
      this.data = res
      

    })
  
  }


  reloadCurrentPage(){
    const url = this.Coinurl;
    this.http.get(url).subscribe((res)=>{
      this.data = res
      // console.log(this.data)

      const url2 = this.balanceUrl;
    this.http.get(url2).subscribe((res)=>{
      this.DEC = res;
        this.DEC = this.DEC.filter((d:any) => d.token == "DEC" )
      // console.log(this.data)   
    })

    })

    this.getTotalPrice();
    this.totalPrice();

    
  }
  
  formatPrice(value: number) {
    let val = (value/1)
    return val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
  }


  totalPrice() {
    let total = 0;
    for(let data of this.DEC){
     

      total += parseFloat(data.balance == "" ? 0 : data.balance);
      
    }
    return this.formatPrice(total);
  }


  getTotalPrice(){
    
    let total2 = 0;
    let total = 0;

    for(let data of this.DEC){
     

      total += parseFloat(data.balance == "" ? 0 : data.balance);
      
    }
    for(let data of this.data){
     

      total2 = (data.current_price);
      
    }

    return total2 * total;

  }

}
