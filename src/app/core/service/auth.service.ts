import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly jwtToken = 'Token';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  constructor() { }

  getToken(){
    return window.localStorage.getItem(this.jwtToken);
  }
  logout(){
    localStorage.removeItem(this.jwtToken);
    this.isAuthenticatedSubject.next(false);
  }
}
