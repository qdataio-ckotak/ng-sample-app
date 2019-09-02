import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { User } from 'src/app/common/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private appService: AppService<User>
  ) {
  }

  ngOnInit() {
  }

}
