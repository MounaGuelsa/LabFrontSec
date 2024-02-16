import { Component } from '@angular/core';
import { AuthService } from './auth.service'; // Import AuthService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LabExpertFront';

  constructor(private authService: AuthService) {} // Inject AuthService

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated(); // Call isAuthenticated() from AuthService
  }
}
