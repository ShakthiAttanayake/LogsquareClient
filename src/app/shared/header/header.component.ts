import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

constructor(private router:Router) {
  
}
onDasboard() {
  this.router.navigate(['/dashboard']);
}
  
  
}
