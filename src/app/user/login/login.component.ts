import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoggedService } from 'src/app/logged.service';
import { NavigationService } from 'src/app/navigation.service';
import { EventForm } from 'src/app/types/event-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loggedStatus: LoggedService, private navigation: NavigationService) {}

  loggedIn: boolean = false;

  formSubmitHandler(form: NgForm) {
    if(form.invalid) {
      console.log('Form is invalid');
      return
    }

    console.log(form.value);
    
    const {email, password} = form.value

    console.log(email);
    console.log(password);


    this.loggedStatus.logIn();

    form.setValue({email: '', password: ''})
    this.navigation.navTo('');
  }
}
