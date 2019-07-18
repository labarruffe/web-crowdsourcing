import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { StateControlService } from 'src/app/services/state-control.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project: Project;
  topic = '';
  title = '';

  constructor(
    private projectService: ProjectService,
    private stateControlService: StateControlService,
  ) { }

  ngOnInit() {
  }

  create(projectOwner_id: string): Observable<Project> {
    this.project = new Project(this.topic, this.title, projectOwner_id, []);
    return this.projectService.post(this.project);
  }

  setProject(project: Project){
    this.project = project;
  }
}
