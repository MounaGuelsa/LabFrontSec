import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnalyseMesures } from './analyse-mesures';

@Injectable({
  providedIn: 'root'
})
export class AnalyseMesuresService {
  private apiUrl = 'http://localhost:8080/api/sousanalyses/mesures';

  constructor(private http: HttpClient) { }

  getAllMesures(): Observable<AnalyseMesures[]> {
    return this.http.get<AnalyseMesures[]>(`${this.apiUrl}/all`);
  }

  getMesureById(id: number): Observable<AnalyseMesures> {
    return this.http.get<AnalyseMesures>(`${this.apiUrl}/${id}`);
  }
}
