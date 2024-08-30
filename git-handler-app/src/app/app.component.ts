import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GitCardComponent } from './common-ui/git-card/git-card.component';
import { GitProfileService } from './data/services/git-profile.service';
import { GitProfile } from './data/interfaces/git-profile.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GitCardComponent, FormsModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  user_name: string = "";

  gitProfileService = inject(GitProfileService)
  profiles: GitProfile[] = []


  getGitCards = () => {
    console.log(this.user_name);
    this.gitProfileService.getGitProfile(this.user_name)
    .subscribe(val => {
      this.profiles = val
    })
  }

}
