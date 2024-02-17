import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Sec/auth.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  });
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { } // Inject Router

  ngOnInit(): void {
    // Form initialization
  }
  onSubmit() {
    if (this.formLogin && this.formLogin.valid) {
      // Call login method from AuthService with form data
      this.authService.login(this.formLogin.value).subscribe(
        (response: any) => {
          // Handle successful login response
          localStorage.setItem('accessToken', response.access_token);
          localStorage.setItem('refreshToken', response.refresh_token);
          this.router.navigate(['/dashboard']); // Navigate to dashboard page
          this.formLogin.reset(); // Reset form
        },
        error => {
          // Handle login error
          console.error(error);
          this.errorMessage = error.message || 'An error occurred during login.';
        }
      );
    }
  }
}








































