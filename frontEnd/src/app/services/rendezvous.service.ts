import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {
  private apiUrl = 'http://localhost:8888/LogementRendezVous_Etudiant_war_exploded/api/rendezvous/';

  constructor(private http: HttpClient) {}

  getAllRendezVous(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getAll`);
  }

  addRendezVous(rendezVous: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, rendezVous);
  }

  updateRendezVous(id: number, rendezVous: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, rendezVous);
  }

  deleteRendezVous(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}
