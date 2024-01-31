import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ReagentService {

  private apiUrl = 'http://localhost:8080/api/reactifs';

  constructor(private http: HttpClient) {}

  getReagents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
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
