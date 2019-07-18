import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

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
  ) { }

  ngOnInit() {
  }

  create(projectOwner_id: string) {
    this.project = new Project('', this.topic, this.title, projectOwner_id, []);
    this.projectService.post(this.project).subscribe(
      (response) => {
        alert(response);
      },
      (error) => {
        alert(error);
      }
    ); 
  }
}
