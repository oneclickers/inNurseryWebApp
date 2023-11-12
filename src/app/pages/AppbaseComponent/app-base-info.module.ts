import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoleComponent } from './employee-role/employee-role.component';
import { NbButtonGroupModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbIconModule, NbToastrModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularPaginatorModule } from 'angular-paginator';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [EmployeeRoleComponent],
  imports: [
    CommonModule,
    NbCardModule,
    ThemeModule,
    NbButtonModule,
    NbButtonGroupModule,
    NbIconModule,
    ReactiveFormsModule,
    AngularPaginatorModule,
    Ng2SearchPipeModule,
    NbCheckboxModule,
    NbToastrModule.forRoot()
  ]
})
export class AppBaseInfoModule { }
