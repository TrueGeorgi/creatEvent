import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class LoggedService {
  logged: boolean = false;
  username: string = '';

  constructor(private afAuth: AngularFireAuth) {
    // Subscribe to authentication state changes
    this.afAuth.authState.subscribe(user => {
      if (user) {
        // User is logged in
        this.logged = true;
        this.username = user.email || '';
      } else {
        // User is logged out
        this.logged = false;
        this.username = '';
      }
    });
  }

  logOut() {
    this.logged = false
    this.username = '';
  }

  logIn() {
    this.logged = true
  }
}
