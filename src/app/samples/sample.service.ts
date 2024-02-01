// sample.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Sample } from './sample';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getSamples(): Observable<Sample[]> {
    return this.http.get<Sample[]>(`${this.apiUrl}/echantillons`);
  }

  addSample(sample: Sample): Observable<Sample> {
    return this.http.post<Sample>(`${this.apiUrl}/echantillons`, sample);
  }

  getSample(id: number): Observable<Sample> {
    return this.http.get<Sample>(`${this.apiUrl}/echantillons/${id}`);
  }

  updateSample(sample: Sample): Observable<Sample> {
    return this.http.put<Sample>(`${this.apiUrl}/echantillons/${sample.echantillonId}`, sample);
  }

  deleteSample(id: number): Observable<string> {
    const isConfirmed = window.confirm('Are you sure you want to delete this sample?');

    if (isConfirmed) {
      return this.http.delete(`${this.apiUrl}/echantillons/${id}`, { responseType: 'text' });
    } else {
      return new Observable<string>((observer) => {
        observer.next('Deletion canceled');
        observer.complete();
      });
    }
  }

  
}
