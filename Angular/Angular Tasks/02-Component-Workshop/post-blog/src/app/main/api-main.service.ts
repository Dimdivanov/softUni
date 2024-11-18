import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable()
export class ApiMainService implements OnDestroy {
  constructor(private http: HttpClient) {}

  getPosts() {
    const { apiUrl } = environment;
    return this.http.get(`${apiUrl}/posts`);
  }
  ngOnDestroy(): void {
    return console.log('data fetching has been complete, SUCCESS');
  }
}
