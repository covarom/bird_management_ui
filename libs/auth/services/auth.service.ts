import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;

  /**  Goi api trong service
   *   code ben duoi chi la vi du thoi
   */
  login(username: string, password: string): boolean {
    if (username === 'user' && password === '123') {
      this.loggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
