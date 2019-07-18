import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project';
import { ProjectOwnerService } from 'src/app/services/project-owner.service';
import { ProjectOwner } from 'src/app/models/project-owner';
import { Volunteer } from 'src/app/models/volunteer';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Project[];
  projectOwners: ProjectOwner[];
  volunteers: Volunteer[];
  findProjectOwnerInfo: any;
  constructor(
    private projectService: ProjectService,
    private projectOwnerService: ProjectOwnerService,
  ) { }

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

    this.projectOwnerService.getAll().subscribe(
      (result) => {
        this.projectOwners = result;
      },
      (error) => {
        alert('Erro ao carregar todos dados de Donos de Projeto');
        console.log(error);
      }
    )  

    this.findProjectOwnerInfo = '5d30184589abff5249aebea6';
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
}
