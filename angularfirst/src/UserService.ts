import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 1, username: 'user1', email: 'user1@example.com' },
    { id: 2, username: 'user2', email: 'user2@example.com' }
  ];

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  getUser(id: number): Observable<User> {
    return of(this.users.find(user => user.id === id));
  }
}

