import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SqlConfigService } from '../../../services/sql-config.service';
import { GlobalConfigService } from '../../../services/global-config.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'ngx-ch-role-employee',
  templateUrl: './ch-role-employee.component.html',
  styleUrls: ['./ch-role-employee.component.scss']
})
export class ChRoleEmployeeComponent implements OnInit {

  public Header: String
  public search: String
  public rowData: any[]=[];
  public RoleNameList:any[]=[]
  public EmployeeNameList:any[]=[]
  public maxSize = "7";
  public agPaginatorConfig: any;
  public FormGup: FormGroup;
  public router_Name: any = []
  constructor(
    private route: ActivatedRoute,
    private SqlConfig: SqlConfigService,
    private GblConfig:GlobalConfigService,
    private fb:FormBuilder,
    private router: Router,
    private message:NbToastrService
    ) { }

  ngOnInit(): void {
    this.ngPreparForm()
    this.route
      .data
      .subscribe((value: any) => {
        if (value)
         this.Header = value['header']
        else this.Header = null
      });
      this.agPaginatorConfig = {
        id: 'ANGULAR_PAGINATOR_DEFAULT',
        itemsPerPage: this.maxSize,
        currentPage: 1
      }
      this.getInitalData();
  }

  public getInitalData():void{
    var observable:Observable<any>[]=[]
    observable.push(this.SqlConfig.getAllEmployeeRole(this.GblConfig.getEmplyeeRole))
    observable.push(this.SqlConfig.getAllEmployeeList(this.GblConfig.getEmplyeeList))
    observable.push(this.SqlConfig.getEmployeeRoleList(this.GblConfig.getRoleEmplyeeList));
    forkJoin(observable).subscribe((resAry:any)=>{
      console.log("response array",resAry);
      if(resAry?.length > 0){
        resAry.forEach((res:any,index:number)=>{
          if(res.statuscode&&index===0){
            this.RoleNameList=res.data
          }
          else if(res.statuscode&&index===1){
          
            this.EmployeeNameList=res.data
          }
          else if(res.statuscode&&index===2){
            this.rowData=res.data;
          }
          else if(res.statuscode===300){
            this.message.
            show('No Data Found','INFO',
                {
                  status:'info',
                  duration:3000,
                  hasIcon:true
                }
              )
        }
        })
      }
    },(error:any)=>{
      this.message.
      show(error,'ERROR',
          {
            status:'danger',
            duration:3000,
            hasIcon:true
          }
        )
    })
 
  }
  public editItem(id:number){
    console.log(id);
  }
  public deleteItem(id:number,itemName:any){
console.log(id,itemName);

  }
  public currentPage(event: any) {
    this.agPaginatorConfig = {
      id: 'ANGULAR_PAGINATOR_DEFAULT',
      itemsPerPage: this.maxSize,
      currentPage: event
    }

  }
  public ngPreparForm() {
    this.FormGup = this.fb.group({
      search: [null],
    })
  }
  public setPageHeader() {
    this.router_Name = this.router.url.split('/')
    this.router_Name = this.router_Name.splice(1, 3)
    

  }
  public onKeyUpEvent(event: any) {
    this.search = this.FormGup.controls['search'].value;
  }
  public addItem(){

  }
  public select(id:any,type:string){
    console.log("id",id);
    
    if(type==='All'){
      this.rowData.forEach((res:any)=>{
       console.log("selected item",res);
       if(id['target']['checked']){
        res.checked=true
       }else{
        res.checked=false
       }
      })
    }else{
      this.rowData.forEach((res:any)=>{
       if(id===res.ID){
         if(res.checked){
          res.checked=false
         }else{
          res.checked=true
         }
        }
       })
    }

  }

}
