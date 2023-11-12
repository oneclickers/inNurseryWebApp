import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalConfigService {
  constructor() { }
  //name of the server router 
public getEmplyeeRole:string='employeerole'
public getEmplyeeList:string='employeelist'
public getRoleEmplyeeList:string='roleemployeelist'
}
