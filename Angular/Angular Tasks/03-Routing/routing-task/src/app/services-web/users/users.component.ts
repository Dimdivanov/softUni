import { Component, Input } from '@angular/core';
import { Users } from '../../types/users-type';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterLink],
  providers: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  @Input('data') dataUsers: Users[] | null = null;
}
