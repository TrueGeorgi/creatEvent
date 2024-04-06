import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { LoggedService } from 'src/app/logged.service';
import { NavigationService } from 'src/app/navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private loggedStatus: LoggedService,
    private navigation: NavigationService,
    private authService: AuthService,
  ) {}

  loggedIn: boolean = false;
  showError: boolean = false;

  formSubmitHandler(form: NgForm) {
    if (form.invalid) {
      console.log('Form is invalid');
      return;
    }

    const { email, password } = form.value;

    this.authService
      .signIn(form.value)
      .subscribe(
        () => {
          this.loggedStatus.logIn();
          this.loggedStatus.username = email;
          this.navigation.navTo('');
        },
        (error: any) => {
          console.log('Not a registered user');
          this.showError = true;
        }
      );

    form.setValue({ email: '', password: '' });
  }
}
