import { Component, OnInit } from '@angular/core';
import { MainPostsComponent } from './main-posts/main-posts.component';
import { AsidePostsComponent } from './aside-posts/aside-posts.component';
import { ApiMainService } from './api-main.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MainPostsComponent, AsidePostsComponent],
  providers: [ApiMainService],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  constructor(private apiService: ApiMainService) {}
  ngOnInit() {
    this.apiService.getPosts().subscribe((p) => {
      console.log(p, 'this is my data logged in');
    });
  }
}
