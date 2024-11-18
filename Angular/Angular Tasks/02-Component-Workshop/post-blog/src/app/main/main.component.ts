import { Component } from '@angular/core';
import { MainPostsComponent } from './main-posts/main-posts.component';
import { AsidePostsComponent } from './aside-posts/aside-posts.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MainPostsComponent, AsidePostsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
