import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './directives/highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'directiveDemo';
}
