import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Sec/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private authService: AuthService) { }
  
  ngOnInit(): void {
  }

}
