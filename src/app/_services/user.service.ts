  import { Injectable } from '@angular/core';
  import {HttpClient, HttpHeaders} from "@angular/common/http";
  import {NgForm} from "@angular/forms";
  import {UserAuthService} from "./user-auth.service";
  import {Observable} from "rxjs";
  import {User} from "../class/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  PATH_OF_API = "http://localhost:8080";
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(private httpclient:HttpClient, private userAuthService: UserAuthService) { }


  public getUser(username: string): Observable<User>{
    return this.httpclient.get<User>(this.PATH_OF_API + username)
  }

  public login(loginData: any) {
    return this.httpclient.post(this.PATH_OF_API + '/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }

  public register(registerData: any){
    return this.httpclient.post(this.PATH_OF_API+ '/register', registerData, {
      headers: this.requestHeader,
    })
  }

  // @ts-ignore
  public roleMatch(allowedRoles: any): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
  }

}
