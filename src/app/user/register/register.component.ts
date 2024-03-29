import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formSubmitHandler(form: NgForm) {
    if(form.invalid) {
      console.log('Form is invalid');
      return
    }

    console.log(form.value);
    
    const {email, password} = form.value

    console.log(email);
    console.log(password);
    

    form.setValue({email: '', password: ''})
  }
}
