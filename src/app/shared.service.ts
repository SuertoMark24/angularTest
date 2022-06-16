import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';





const headers= new HttpHeaders()
  .set('Authorization', '563492ad6f917000010000012dcbca094df545839e07fda5978f109a');




@Injectable({
  providedIn: 'root'
})

export class SharedService {
  readonly APIurl = "http://localhost:50135/api";
  readonly PhotoUrl = "http://localhost:50135/Photos/";
  readonly slpUrl = 'https://game-api.axie.technology/api/v1/ronin:6f69849b35d6179d362dc544c9104037696c86ae';
  readonly slpUrl2 = 'https://api.axie.management/v1/overview/0x6f69849b35d6179d362dc544c9104037696c86ae';
  readonly pexel =  'https://api.pexels.com/v1/curated?photos';
  

 
  constructor(private http:HttpClient) {}


  getpexel():Observable<any[]> {

    return this.http.get<any>(this.pexel,{ 'headers': headers })

  }
  get_users_by_id():Observable<any[]> {
    return this.http.get<any>(this.slpUrl);
  }
  get_users_by_id2():Observable<any[]> {
    return this.http.get<any>(this.slpUrl2);
  }



  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/department');
  }
  addDepartment(val:any){
    return this.http.post(this.APIurl+'/department', val);
  }
  updateDepartment(val:any){  
    return this.http.put(this.APIurl+'/department', val);
  }
  deleteDepartment(val:any){
    return this.http.delete(this.APIurl+'/department/' +val);
  }


  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/Employee');
  }
  addEmployee(val:any){
    return this.http.post(this.APIurl+'/Employee', val);
  }
  updateEmployee(val:any){  
    return this.http.put(this.APIurl+'/Employee', val);
  }
  deleteEmployee(val:any){
    return this.http.delete(this.APIurl+'/Employee/'+val);
  }
  
  UploadPhoto(val:any){
    return this.http.post(this.APIurl+'/Employee/Savefile', val);
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIurl+'/Employee/GetAllDepartmentNames');
  }


}