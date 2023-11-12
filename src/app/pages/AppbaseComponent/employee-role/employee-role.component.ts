import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SqlConfigService } from '../../../../services/sql-config.service';
import { GlobalConfigService } from '../../../../services/global-config.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-employee-role',
  templateUrl: './employee-role.component.html',
  styleUrls: ['./employee-role.component.scss']
})
export class EmployeeRoleComponent implements OnInit {
  public Header: String
  public search: String
  public rowData: any[]=[] 
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
   this.SqlConfig.getAllEmployeeRole(this.GblConfig.getEmplyeeRole).subscribe(
    (res:any)=>{
      if(res.statuscode===200){
        res.data.forEach((element:any) => {
          element.checked=false
        });
        this.rowData=res.data;
      }else if(res.statuscode===300){
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
