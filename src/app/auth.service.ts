import { Injectable } from '@angular/core';
import { User } from './types/user';
import { Observable, from, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth
  ) { }

  signIn(params: User): Observable<any> {
    return from(this.auth.signInWithEmailAndPassword(
      params.email, params.password
    ))
  }
}
