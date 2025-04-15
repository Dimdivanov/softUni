import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './users/user-service.service';
import { Users } from '../types/users-type';
import { UsersComponent } from './users/users.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-services-web',
  standalone: true,
  imports: [RouterOutlet, UsersComponent],
  providers: [],
  templateUrl: './services-web.component.html',
  styleUrl: './services-web.component.css',
})
export class ServicesWebComponent implements OnInit {
  parentData: Users[] = [];
  constructor(public userService: UserServiceService) {}
  ngOnInit(): void {
    this.fetchUsers();
  }
  fetchUsers(): void {
    this.userService.getUsers().subscribe((users) => {
      this.parentData = users;
      console.log(users);
    });
  }
}
