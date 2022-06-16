import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pexel',
  templateUrl: './pexel.component.html',
  styleUrls: ['./pexel.component.css']
})
export class PexelComponent implements OnInit {



  PEXEL:any = []
  ImgArr:any = []
  
  constructor(private service:SharedService , private http: HttpClient ) { }



  ngOnInit(): void {
    this.getpexel2();
   
  }
  
  getpexel2(){
    
    this.service.getpexel().subscribe((res:any)=>{
     
     this.PEXEL = res.photos
       console.log(this.PEXEL)
    })
   


  }


}
