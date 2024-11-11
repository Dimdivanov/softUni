import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentTestComponent } from './new-component-test/new-component-test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponentTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-demo-app';
}
