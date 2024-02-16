import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/auth'; // URL de votre API d000000000000000000000000000000000000000000000000'authentification

  constructor(private http: HttpClient) { }

  login(credentials: { email: string, password: string }): Observable<any> {
    // Envoyer les informations de connexion à votre API
    return this.http.post(`${this.apiUrl}/authenticate`, credentials);
  }

  logout(): void {
    // Implémenter la logique de déconnexion, par exemple, vider le token d'authentification dans le stockage local
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }

  refreshToken(): Observable<any> {
    // Implémenter la logique pour rafraîchir le token d'authentification
    const refreshToken = localStorage.getItem('refreshToken');
    return this.http.post(`${this.apiUrl}/refresh`, { refreshToken });
  }


  isAuthenticated(): boolean {
    // Check if user is authenticated based on your authentication logic
    const accessToken = localStorage.getItem('accessToken');
    return accessToken !== null;
  }
}
