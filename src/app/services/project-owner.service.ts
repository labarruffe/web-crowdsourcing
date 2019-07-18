import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ProjectOwner } from '../models/project-owner';
import { Observable } from 'rxjs/internal/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProjectOwnerService {

  private baseUrl = 'http://localhost:3000/crowdsourcing';

  constructor(
    private http: HttpClient) {}

  /**
    * POST: add Project Owner to the server
  */
  post(projectOwner: ProjectOwner): Observable<ProjectOwner> {
    return this.http.post<ProjectOwner>(`${this.baseUrl}/projectowners`, projectOwner, httpOptions);
  }

  /**
    * GET Project Owner by id
  */
  getById(id: string): Observable<ProjectOwner> {
    return this.http.get<ProjectOwner>(`${this.baseUrl}/projectowners/${id}`);
  }

  /**
    * GET all Project Owners
  */
  getAll(): Observable<ProjectOwner[]> {
    return this.http.get<ProjectOwner[]>(`${this.baseUrl}/projectowners`);
  }

  /**
    * PATCH: update Project Owner
  */
  update(projectOwner: ProjectOwner, id: string): Observable<ProjectOwner> {
    return this.http.patch<ProjectOwner>(`${this.baseUrl}/projectowners/${id}`, projectOwner, httpOptions);
  }

  /**
    * DELETE: delete Project Owner
  */
  delete(id: string): Observable<ProjectOwner> {
    return this.http.delete<ProjectOwner>(`${this.baseUrl}/projectowners/${id}`);
  }
}
