import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

import { HttpClient } from '@angular/common/http';
import { __values } from 'tslib';

declare var $: any;

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  readonly Coinurl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&ids=dark-energy-crystals&order=market_cap_desc&per_page=100&page=1&sparkline=false';
  readonly balanceUrl = 'https://api.splinterlands.io/players/balances?username=javarice&username=javarice01'

  data:any = []
  id:any


  
  constructor(private service:SharedService , private http: HttpClient) { }

  EmployeeList:any=[];
  EmployeeListFilter:any=[];

  ModalTitle!: string;
  ActivateAddEditEmpComp:boolean=false;
  emp:any;
  DepartmentsList:any=[];
  Department!:string;
  
  selected!: string;
  getlist!: string;

  balanceSPS:any= []

  selectedDate!: string;


  ngOnInit(): void {
    this.refreshEmplist();
    this.loadDepartmentList();
    this.getTotalPrice();
    this.refreshEmplistFilter();


    const url = this.Coinurl;
    this.http.get(url).subscribe((res)=>{
      this.data = res
      // console.log(this.data)

    })

    const url2 = this.balanceUrl;
    this.http.get(url2).subscribe((res)=>{
      this.balanceSPS = res
      // console.log(this.data)
      

    })
  
  }

  clearAll(){

    this.refreshEmplistFilter();
    this.selectedDate = ""
    this.selected = ""
  
  }


  onSelect() {

    this.EmployeeListFilter = this.EmployeeList.filter((x: { 
      Department :any;
    }) => x.Department == this.selected 
    );

    this.selectedDate = ""


  }

  onSelectDate() {
    this.EmployeeListFilter = this.EmployeeList.filter((x: { 
      DateOfJoining :any;
    }) => x.DateOfJoining == this.selectedDate
    );
  }

  selectAll(){
    this.refreshEmplistFilter();
  }

  loadDepartmentList(){
    this.service.getAllDepartmentNames().subscribe((data:any)=>{
      this.DepartmentsList= data;
    });
  }



 addClick(){
   this.emp={
     EmployeeId:0,
     EmployeeName:"",
     Department:"",
     DateOfJoining:"",
     PhotoFileName:"anonymous.png"
   }

   this.ModalTitle="Add DEC";
   this.ActivateAddEditEmpComp=true;
 }
  closeClick(){
  this.ActivateAddEditEmpComp=false; 
  this.refreshEmplist();
  this.refreshEmplistFilter();
  }

  editClick(item:any){
  
    this.emp=item;
    this.ModalTitle="Edit Amount";
    this.ActivateAddEditEmpComp=true;
    this.refreshEmplistFilter();
  }

  deleteClick(item: any){
    if( confirm('Are you sure?')){
      this.service.deleteEmployee(item.EmployeeId).subscribe(data=>{
        alert (data.toString());
        this.refreshEmplist();
        this.refreshEmplistFilter();
      })
    }
    
  }
    
  refreshEmplist(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList=data;
      
    });
  }
  
  refreshEmplistFilter(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeListFilter=data;
      
    });
  }


  formatPrice(value: number) {
    let val = (value/1)
    return val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
  }

  totalPrice() {
    let total = 0;
    for(let data of this.EmployeeListFilter){
     

      total += parseFloat(data.EmployeeName == "" ? 0 : data.EmployeeName);
      
    }
    return this.formatPrice(total);
  }


  getTotalPrice(){
    
    let total2 = 0;
    let total = 0;

    for(let data of this.EmployeeListFilter){
     

      total += parseFloat(data.EmployeeName == "" ? 0 : data.EmployeeName);
      
    }
    for(let data of this.data){
     

      total2 = (data.current_price);
      
    }

    return total2 * total;

  }


  reloadCurrentPage(){
    const url = this.Coinurl;
    this.http.get(url).subscribe((res)=>{
      this.data = res
      // console.log(this.data)

    })


  }
 

}
