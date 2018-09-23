import { Injectable } from '@angular/core';
import { User } from '../dto/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private user: User;

  constructor() {}

  /**
   * Getter $user
   * @return {User}
   */
  public get $user(): User {
    return this.user;
  }

  /**
   * Setter $user
   * @param {User} value
   */
  public set $user(value: User) {
    this.user = value;
  }
}
