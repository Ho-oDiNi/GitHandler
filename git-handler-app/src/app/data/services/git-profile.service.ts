import {HttpClient} from '@angular/common/http';
import {inject, Injectable } from '@angular/core';
import {GitProfile} from '../interfaces/git-profile.interface';

@Injectable({
  providedIn: 'root'
})
export class GitProfileService {

  http: HttpClient = inject(HttpClient)
  
  getGitProfile(user_name: string){
    return this.http.get<GitProfile[]>(`http://api.github.com/users/${user_name}/followers`)
  }
}
