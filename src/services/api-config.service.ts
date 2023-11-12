import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  constructor(
    private http:HttpClient,
  ) { }

  get(URL:string,data:any=null){
    if(data){
      return this.http.get(`${environment.serverConnectionUrl}/${URL}`)
    }else{
      return this.http.get(`${environment.serverConnectionUrl}/${URL}`)
    }
   
  }
}
