import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GitCardComponent } from './common-ui/git-card/git-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GitCardComponent],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'git-handler-app';
}
