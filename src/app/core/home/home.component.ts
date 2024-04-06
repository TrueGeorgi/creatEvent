import { Component, Input } from '@angular/core';
import { LoggedService } from 'src/app/logged.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user: string = this.loggedStatus.username;

  constructor(private loggedStatus: LoggedService) {}

  userExist() {
    return this.user.length > 0;
  }
}
