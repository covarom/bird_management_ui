import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly USER_KEY = 'user';

  constructor() {}

  saveUser(user: any): void {
    return localStorage.setItem(this.USER_KEY, user);
  }

  getUser(): string | null {
    return localStorage.getItem(this.USER_KEY);
  }

  removeUser(): void {
    return localStorage.removeItem(this.USER_KEY);
  }
}
