import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-pg-employee-management',
  templateUrl: './pg-employee-management.component.html',
  styleUrls: ['./pg-employee-management.component.scss']
})
export class PgEmployeeManagementComponent implements OnInit {
  public Header: String
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route
    .data
    .subscribe((value: any) => {
      if (value)
       this.Header = value['header']
      else this.Header = null
    });
  }

}
