import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Project } from '../models/project';
import { Observable } from 'rxjs/internal/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseUrl = 'http://localhost:3000/crowdsourcing';

  constructor(
    private http: HttpClient) {}

  /**
    * POST: add Project to the server
  */
  post(project: Project): Observable<Project> {
    return this.http.post<Project>(`${this.baseUrl}/projects`, project, httpOptions);
  }

  /**
    * GET Project by id
  */
  getById(id: string): Observable<Project> {
    return this.http.get<Project>(`${this.baseUrl}/projects/${id}`);
  }

  /**
    * GET all Project
  */
  getAll(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseUrl}/projects`);
  }

  /**
    * PATCH: update Project
  */
  update(project: Project, id: string): Observable<Project> {
    return this.http.patch<Project>(`${this.baseUrl}/projects/${id}`, project, httpOptions);
  }

  /**
    * DELETE: delete Project
  */
  delete(id: string): Observable<Project> {
    return this.http.delete<Project>(`${this.baseUrl}/projects/${id}`);
  }
}
