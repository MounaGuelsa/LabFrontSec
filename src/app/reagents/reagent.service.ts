// reagent.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Reagent } from './reagent';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReagentService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getReagents(): Observable<Reagent[]> {
    return this.http.get<Reagent[]>(`${this.apiUrl}/reactifs`);
  }

  addReagent(reagent: Reagent): Observable<Reagent> {
    return this.http.post<Reagent>(`${this.apiUrl}/reactifs`, reagent);
  }

  updateReagent(reagent: Reagent): Observable<Reagent> {
    return this.http.put<Reagent>(`${this.apiUrl}/reactifs/${reagent.reactifId}`, reagent);
  }

  deleteReagent(id: number): Observable<string> {
    const isConfirmed = window.confirm('Are you sure you want to delete this reagent?');

    if (isConfirmed) {
      return this.http.delete(`${this.apiUrl}/reactifs/${id}`, { responseType: 'text' });
    } else {
      return new Observable<string>((observer) => {
        observer.next('Deletion canceled');
        observer.complete();
      });
    }
  }
}
