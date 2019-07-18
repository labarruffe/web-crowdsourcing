import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateControlService {

  private currentProject = new BehaviorSubject<Project>(null);
  private currentProjectList = new BehaviorSubject<Project[]>([]);

  constructor() { }

  public getCurrentProject(): Observable<Project>{
    return this.currentProject.asObservable();
  }

  public setCurrentProject(currentProject: Project) {
    this.currentProject.next(currentProject);
  }
  
  public getCurrentProjectList(): Observable<Project[]> {
    return this.currentProjectList.asObservable();
  }

  public setCurrentProjectList(currentProjectList: Project[]) {
    this.currentProjectList.next(currentProjectList);
  }

  
}
