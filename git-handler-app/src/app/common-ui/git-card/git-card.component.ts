import { Component, Input } from '@angular/core';
import { GitProfile } from '../../data/interfaces/git-profile.interface';

@Component({
  selector: 'app-git-card',
  standalone: true,
  imports: [],

  templateUrl: './git-card.component.html',
  styleUrl: './git-card.component.css'
})
export class GitCardComponent {
  @Input() profile!: GitProfile;
}
