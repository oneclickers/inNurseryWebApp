import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebAppBaseConfigComponent } from './web-app-base-config.component';
import { EmployeeRoleComponent } from '../AppbaseComponent/employee-role/employee-role.component';

const routes: Routes = [
    {
        path:'',component:WebAppBaseConfigComponent,
        children:[
            {
                path:'',redirectTo:'employeerole',pathMatch:'full'
            },
            {
                path:'employeerole',component:EmployeeRoleComponent,data:{header:'Employee Role Details'}
            }
        ]
    },
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebAppBaseConfigRoutingModule { }