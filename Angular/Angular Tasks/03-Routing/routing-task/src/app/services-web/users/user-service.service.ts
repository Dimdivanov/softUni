import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../../types/users-type';

@Injectable({ providedIn: 'root' })
export class UserServiceService {
  apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(public http: HttpClient) {}

  getUsers() {
    return this.http.get<Users[]>(this.apiUrl);
  }
  getSingleUser(userId: number | string) {
    return this.http.get<Users>(`${this.apiUrl}/${userId}}`);
  }
}
