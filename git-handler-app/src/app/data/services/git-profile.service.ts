import {HttpClient} from '@angular/common/http';
import {inject, Injectable } from '@angular/core';
import {GitProfile} from '../interfaces/git-profile.interface';

@Injectable({
  providedIn: 'root'
})
export class GitProfileService {

  private http: HttpClient = inject(HttpClient);
  
  public getGitProfile(user_name: string){
    return this.http.get<GitProfile[]>(`http://api.github.com/users/${user_name}/followers`);
  }
}
