import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project';
import { ProjectOwnerService } from 'src/app/services/project-owner.service';
import { ProjectOwner } from 'src/app/models/project-owner';
import { Volunteer } from 'src/app/models/volunteer';
import { StateControlService } from 'src/app/services/state-control.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Project[];
  projectOwners: ProjectOwner[];
  volunteers: Volunteer[];

  constructor(
    private projectService: ProjectService,
    private projectOwnerService: ProjectOwnerService,
    private stateControlService: StateControlService,
  ) {}

  ngOnInit() {
    this.listAllProjects();
  }

  listAllProjects() {
    this.projectService.getAll().subscribe(
      (result) => {
        this.projects = result;
      },
      (error) => {
        alert('Erro ao carregar todos Projetos');
        console.log(error);
      }
    )

  }

  delete(id: string) {
    this.projectService.delete(id).subscribe(
      (result) => {
        alert('Projeto deletado com sucesso: ' + result.title);
        this.listAllProjects();
      },
      (error) => {
        alert('Erro ao deletar projeto');
        console.log(error);
      }
    )
  }

  addProject(project: Project) {
    this.projects.push(project);
  }
}
