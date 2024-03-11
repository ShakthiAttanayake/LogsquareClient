import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../core/Services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  showIconsOnHeader: boolean = false;

  constructor(private router:Router, private loginService:LoginService) {
    
  }

  ngOnInit(): void {
    this.showIconsOnHeader = this.loginService.getBooleanValue();
  }


  onDasboard() {
    this.router.navigate(['/dashboard']);
  }

  onLogout() {
    localStorage.removeItem('Token');
    this.loginService.setBooleanValue(true);
    this.router.navigate(['']);
    }
  
  
}
