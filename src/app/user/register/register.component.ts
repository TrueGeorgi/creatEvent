import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggedService } from 'src/app/logged.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  showError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private router: Router,
    private loggedStatus: LoggedService
  ) { this.registerForm = new FormGroup({}) }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  formSubmitHandler(form: NgForm) {
    if(form.invalid) {
      console.log('Form is invalid');
      return
    }
    
    const {email, password} = form.value

    this.auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
          this.loggedStatus.logIn();
          
          this.loggedStatus.username = email;
          this.router.navigate(['/']); // redirect to home page after successful registration
        })
        .catch(error => {
          this.showError = true;
        });

    form.setValue({email: '', password: ''})
  }
}
