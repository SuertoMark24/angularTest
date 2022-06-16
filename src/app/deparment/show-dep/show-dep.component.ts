import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {
  
  readonly Coinurl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&ids=dark-energy-crystals&order=market_cap_desc&per_page=100&page=1&sparkline=false';
 
  readonly balanceUrl = 'https://api.splinterlands.io/players/balances?username=darkcommander&username=darkcommander&username=javarice&username=javarice01&username=javarice02&username=javarice03&username=javarice04&username=javarice05&username=javarice06&username=javarice07&username=javarice08'

  constructor(private service:SharedService , private http: HttpClient ) { }

  DepartmentList:any=[];

  ModalTitle!: string;
  ActivateAddEditDepComp:boolean=false;
  dep:any;

  DepartmentIdFilter:string="";
  DepartmentNameFilter:string="";

  DepartmentListWithouFilter:any=[];

  DEC:any= []
  data:any = []

  ngOnInit(): void {
    this.refreshDeplist();

    const url2 = this.balanceUrl;
    this.http.get(url2).subscribe((res)=>{
      this.DEC = res;
        this.DEC = this.DEC.filter((d:any) => d.token == "DEC" )
      // console.log(this.data)   
    })
    const url = this.Coinurl;
    this.http.get(url).subscribe((res)=>{
      this.data = res
      // console.log(this.data)

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


 addClick(){
   this.dep={
     DepartmentId:0,
     DeparmentName:"",
     TotalDec:"",
     DateOfJoining:""
   }
   this.ModalTitle="Add Account";
   this.ActivateAddEditDepComp=true;
 }
  closeClick(){
  this.ActivateAddEditDepComp=false; 
  this.refreshDeplist();
  }

  editClick(item: any){
    this.dep=item;
    this.ModalTitle="Edit Account";
    this.ActivateAddEditDepComp=true;
  }

  deleteClick(item: any){
    if( confirm('Are you sure?')){
      this.service.deleteDepartment(item.DepartmentId).subscribe(data=>{
        alert (data.toString());
        this.refreshDeplist();
      })
    }
  }
    
  refreshDeplist(){
    this.service.getDepList().subscribe(data=>{
      this.DepartmentList=data;
      this.DepartmentListWithouFilter=data;

    });

  }

  FilterFn(){
    var DepartmentNameFilter = this.DepartmentNameFilter;

    this.DepartmentList = this.DepartmentList.filter(function(el:any){
        return el.DepartmentName.toString().toLowerCase().include(
          DepartmentNameFilter.toString().toLowerCase().trim()
        ) 
    });
  }

  sortResult(prop:any, desc:any){
    this.DepartmentList = this.DepartmentListWithouFilter.sort(function(a:any,b:any){
      if(desc){
        return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 : 0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 : 0);
      }
    });
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

