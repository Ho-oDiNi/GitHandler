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

  public user_name: string = "";
  public showHint: boolean = true;
  public Hint: string = "Please enter the GitHub username";

  private gitProfileService = inject(GitProfileService);
  public profiles: GitProfile[] = [];

  public getGitCards = () => {
    if (this.user_name == "") {
      this.profiles = []; 
      this.showHint = true;
      this.Hint = "Please enter the GitHub username";
      return;
    }
    
    this.gitProfileService.getGitProfile(this.user_name)
    .subscribe(val => {
      this.profiles = val;
    })
    this.showHint = false;
    this.user_name == "";

    setTimeout(() => {
      if (this.profiles.length == 0) 
        {
          this.showHint = true;
          this.Hint = "Username Not Found";
        }
    }, 500);
  }
    

}
