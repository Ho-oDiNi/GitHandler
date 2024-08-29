import {HttpClient} from '@angular/common/http';
import {inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GitProfileService {

  http: HttpClient = inject(HttpClient)

  baseApiUrl: string = 'http://api.github.com/users'
  
  getGitProfile(){
    return this.http.get(`${this.baseApiUrl}/google/followers`) //  !!! Change google to <user_name>
  }
}
