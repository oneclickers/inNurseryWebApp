import { Injectable } from '@angular/core';
import { ApiConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root'
})
export class SqlConfigService {

  constructor(
    private api:ApiConfigService
  ) { }

  public getAllEmployeeRole(Url:any){
    return this.api.get(Url)
  }
  public getAllEmployeeList(Url:any){
    return this.api.get(Url)
  }
  public getEmployeeRoleList(Url:any){
    return this.api.get(Url)
  }
}
