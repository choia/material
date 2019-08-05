import { Component, OnInit } from '@angular/core';
import { DASHBOARD } from '../mock/dashboard-items';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.css']
})
export class DashboardListComponent implements OnInit {
  dashboards = DASHBOARD;

  constructor() { }

  ngOnInit() {
  }

}
