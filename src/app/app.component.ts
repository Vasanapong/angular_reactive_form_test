import { SignupForm } from './../../validators/SignupForm.validators';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  form = new FormGroup({
    username : new FormControl('',[Validators.required,SignupForm.checkB]),
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
  })

  get username(){
    return this.form.get('username')
  }
}
