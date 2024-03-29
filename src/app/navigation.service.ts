import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedService } from './logged.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router, private loggedStatus: LoggedService) {}

  navTo(path: string) {
    this.router.navigate([path])
    console.log(this.loggedStatus.logged);
    
  }
}
