
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PatientService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getPatients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/patient`);
  }

  addPatient(patientData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/patient`, patientData);
  }
}

