import { Component } from '@angular/core';
import { LoggedService } from 'src/app/logged.service';
import { NavigationService } from 'src/app/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public navigation: NavigationService, public loggedStatus: LoggedService) {}
  // loggedIn = this.loggedStatus.logged;

  // ngOnChanges() {
  //   this.loggedIn = this.loggedStatus.logged
  // }

  get loggedIn(): boolean {
    return this.loggedStatus.logged
  }
}
