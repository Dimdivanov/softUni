import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../../../types/users-type';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  providers: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent implements OnInit {
  user: Users | null = null;
  constructor(
    public userService: UserServiceService,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const userId = this.activatedRoute.snapshot.params['id'];
    console.log('this is the user id', userId);

    this.userService.getSingleUser(2).subscribe((user) => {
      this.user = user;
    });
  }
}
