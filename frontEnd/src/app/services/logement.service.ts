import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogementService {
  private apiUrl = 'http://localhost:8888/LogementRendezVous_Etudiant_war_exploded/api/logement/';

  constructor(private http: HttpClient) {}

  getAllLogements(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getAll`);
  }

  addLogement(logement: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, logement);
  }

  updateLogement(reference: number, logement: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${reference}`, logement);
  }

  deleteLogement(reference: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${reference}`);
  }
}
