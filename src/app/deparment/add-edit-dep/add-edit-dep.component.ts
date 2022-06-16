import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() dep:any;
  DepartmentId!:string;
  DepartmentName!:string;
  TotalDec!: string;
  DateOfJoining!: string;

  ngOnInit(): void {
    this.DepartmentId=this.dep.DepartmentId;
    this.DepartmentName=this.dep.DepartmentName;
    this.TotalDec=this.TotalDec;
    this.DateOfJoining=this.DateOfJoining;
  }
  addDepartment(){
          var val = {
          DepartmentId:this.DepartmentId,
          DepartmentName:this.DepartmentName,
          TotalDec:this.TotalDec, 
          DateOfJoining:this.DateOfJoining   
          };
          this.service.addDepartment(val).subscribe(res=>{
                  alert(res.toString());
          });
  }

  updateDepartment(){
    var val = {
      DepartmentId:this.DepartmentId,
      DepartmentName:this.DepartmentName,
      TotalDec:this.TotalDec,
      DateOfJoining:this.DateOfJoining     
      };
      this.service.updateDepartment(val).subscribe(res=>{
              alert(res.toString());
      });

  }


}
