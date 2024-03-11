import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Auth } from '../../../models/auth.model';
import { LoginService } from '../../../Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private auth: Auth = {} as Auth;

  userName = new FormControl('');
  password = new FormControl('');

  loginForm = this._formBuilder.group({

    userName: this.userName, 
    password: this.password, 
  });

  constructor(private _formBuilder: FormBuilder, private loginService:LoginService, private router:Router) {}

  OnLogin() {
    this.auth.userName = this.loginForm.controls['userName']?.value??'';
    this.auth.password = this.loginForm.controls['password']?.value??'';

    this.loginService.login(this.auth).subscribe(x => {
      console.log(x)
      alert("User logged in successfully !");
      localStorage.setItem('Token',x.token);
      this.loginService.setBooleanValue(true);
      this.router.navigate(['/user-details']);
    });
    
    }

}
