import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Volunteer } from '../models/volunteer';
import { Observable } from 'rxjs/internal/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  private baseUrl = 'http://localhost:3000/crowdsourcing/';

  constructor(
    private http: HttpClient) {}

  /**
    * POST: add Volunteer to the server
  */
  post(volunteer: Volunteer): Observable<Volunteer> {
    return this.http.post<Volunteer>(`${this.baseUrl}/volunteers`, volunteer, httpOptions);
  }

  /**
    * GET Volunteer by id
  */
  getById(id: string): Observable<Volunteer> {
    return this.http.get<Volunteer>(`${this.baseUrl}/volunteers/${id}`);
  }

  /**
    * GET all Volunteers
  */
  getAll(): Observable<Volunteer[]> {
    return this.http.get<Volunteer[]>(`${this.baseUrl}/volunteers`);
  }

  /**
    * PATCH: update Volunteer
  */
  update(volunteer: Volunteer, id: string): Observable<Volunteer> {
    return this.http.patch<Volunteer>(`${this.baseUrl}/volunteers/${id}`, volunteer, httpOptions);
  }

  /**
    * DELETE: delete Volunteer
  */
  delete(id: string): Observable<Volunteer> {
    return this.http.delete<Volunteer>(`${this.baseUrl}/volunteers/${id}`);
  }
}

