import { Component } from '@angular/core';
import { LoggedService } from 'src/app/logged.service';
import { NavigationService } from 'src/app/navigation.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private loggedStatus: LoggedService, private navigation: NavigationService) {}

  logOut() {
    this.loggedStatus.logOut();
    this.navigation.navTo('');
  }
}
