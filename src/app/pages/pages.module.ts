import { NgModule } from '@angular/core';
import { NbButtonGroupModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbIconModule, NbMenuModule, NbSelectModule, NbTabsetModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { WebAppBaseConfigComponent } from './web-app-base-config/web-app-base-config.component';
import { EmployeeRoleComponent } from './AppbaseComponent/employee-role/employee-role.component';
import { AppBaseInfoModule } from './AppbaseComponent/app-base-info.module';
import { PgEmployeeManagementComponent } from './pg-employee-management/pg-employee-management.component';
import { ChEmployeeInfoComponent } from './ch-employee-info/ch-employee-info.component';
import { ChRoleEmployeeComponent } from './ch-role-employee/ch-role-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularPaginatorModule } from 'angular-paginator';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule.forRoot(),
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    AppBaseInfoModule,
    NbTabsetModule,
    NbCardModule,
    NbButtonGroupModule,
    NbIconModule,
    ReactiveFormsModule,
    AngularPaginatorModule,
    Ng2SearchPipeModule,
    NbCheckboxModule,
    NbButtonModule,
    NbSelectModule
  ],
  declarations: [
    PagesComponent,
    WebAppBaseConfigComponent,
    PgEmployeeManagementComponent,
    ChEmployeeInfoComponent,
    ChRoleEmployeeComponent,
    
    
  ],
})
export class PagesModule {
}
