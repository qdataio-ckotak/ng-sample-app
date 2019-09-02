import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';
import { User } from './common/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  users;
  
  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.users = this.getUsers();
  }

  getUsers(): Observable<User []> {
    return this.userService.read();
  }
}
