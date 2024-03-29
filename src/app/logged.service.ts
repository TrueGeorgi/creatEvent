import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedService {

  constructor() { }

  logged: boolean = false;

  logOut() {
    this.logged = false
  }

  logIn() {
    this.logged = true
  }
}
