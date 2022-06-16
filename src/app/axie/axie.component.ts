import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-axie',
  templateUrl: './axie.component.html',
  styleUrls: ['./axie.component.css']
})
export class AxieComponent implements OnInit {


  
  readonly Coinurl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&ids=smooth-love-potion&order=market_cap_desc&per_page=100&page=1&sparkline=false';
 
  constructor(private service:SharedService , private http: HttpClient ) {
   }

  slp:any = []
  coin:any = []
  slp2:any = []

  ttt= "";
  getslp(){
    this.service.get_users_by_id().subscribe((res) => {
      this.slp = Object.values(res);
    
    });
  }
  ngOnInit(): void {
   
    this.getslp();

    const url = this.Coinurl;
    this.http.get(url).subscribe((res)=>{
      this.coin = res
      // console.log(this.data)

    })
    

  }


  totalPrice(){
   
    let total2 = 0;
    for(let data of this.coin){
     

      total2 = (data.current_price);
      
    }

    
    return total2 
  }
  reloadCurrentPage(){

    const url = this.Coinurl;
    this.http.get(url).subscribe((res)=>{
      this.coin = res
      
      // console.log(this.data)

    })

    this.getslp();
  }

  formatPrice(value: number) {
    let val = (value/1)
    return val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
  }


  

}
