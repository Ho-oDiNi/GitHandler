import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GitCardComponent } from './common-ui/git-card/git-card.component';
import { GitProfileService } from './data/services/git-profile.service';
import {GitProfile} from './data/interfaces/git-profile.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GitCardComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'git-handler-app';
  gitProfileService = inject(GitProfileService)
  profiles: GitProfile[] = []

  constructor(){
    this.gitProfileService.getGitProfile()
    .subscribe(val => {
      this.profiles = val
    })
  }
}
