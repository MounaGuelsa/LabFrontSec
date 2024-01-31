// patientService.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Patient } from './patient'; 
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.apiUrl}/patient`);
  }

  addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${this.apiUrl}/patient`, patient);
  }

  getPatient(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.apiUrl}/patient/${id}`);
  }

  updatePatient(patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${this.apiUrl}/patient/${patient.patientId}`, patient);
  }

  deletePatient(id: number): Observable<string> {
    const isConfirmed = window.confirm('Are you sure you want to delete this patient?');
    if (isConfirmed) {
      return this.http.delete(`${this.apiUrl}/patient/${id}`, { responseType: 'text' });
    } else {
      return new Observable<string>((observer) => {
        observer.next('Deletion canceled');
        observer.complete();
      });
    }
  }
}
