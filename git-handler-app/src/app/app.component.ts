import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GitCardComponent } from './common-ui/git-card/git-card.component';
import { InputFormComponent } from './common-ui/input-form/input-form.component';
import { GitProfileService } from './data/services/git-profile.service';
import { GitProfile } from './data/interfaces/git-profile.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GitCardComponent, InputFormComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  gitProfileService = inject(GitProfileService)
  profiles: GitProfile[] = []


  getGitCards = (user_name: string) => {
    this.gitProfileService.getGitProfile(user_name)
    .subscribe(val => {
      this.profiles = val
    })
  }
  // constructor(){
  //   this.gitProfileService.getGitProfile("google")
  //   .subscribe(val => {
  //     this.profiles = val
  //   })
  // }
}
