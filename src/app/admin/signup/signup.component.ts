import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  email : string = '';
  password : string = '';

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  signup() {

    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }

    this.auth.register(this.email,this.password);
    
    this.email = '';
    this.password = '';

  }


}
