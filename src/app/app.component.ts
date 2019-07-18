import { Component, ViewChild } from '@angular/core';
import { ProjectOwner } from './models/project-owner';
import { ProjectOwnerService } from './services/project-owner.service';
import { Volunteer } from './models/volunteer';
import { VolunteerService } from './services/volunteer.service';
import { ProjectComponent } from './components/project/project.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { StateControlService } from './services/state-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ProjectComponent) childProjectComponent: ProjectComponent;
  @ViewChild(ProjectListComponent) childProjectListComponent: ProjectListComponent;

  projectOwner: ProjectOwner;
  volunteer: Volunteer;

  stepControl = 1;
  titleOfSecondStep = '';

  constructor(
    private projectOwnerService: ProjectOwnerService,
    private volunteerService: VolunteerService,
    private stateControlService: StateControlService,
  ){}

  chooseRole(fullName: string, isProjectOwner: boolean) {
    this.stepControl = 2;
    if (isProjectOwner) {
      this.titleOfSecondStep = 'Cadastrar projeto';
      this.projectOwner = new ProjectOwner(fullName);
      this.projectOwnerService.post(this.projectOwner).subscribe(
        (response) => {
          this.projectOwner = response;
        },
        (error) => {
          alert(error);
        }
      );
    } else {
      this.titleOfSecondStep = 'Voluntariar-se em um projeto';    
      this.volunteer = new Volunteer(fullName);
      this.volunteerService.post(this.volunteer).subscribe(
        (response) => {
          this.volunteer = response;
        },
        (error) => {
          alert(error);
        }
      );  
    }
  }

  orderCreateProject() {
    this.childProjectComponent.create(this.projectOwner._id).subscribe(
      (response) => {
        this.childProjectComponent.setProject(response);
        this.stepControl = 3;
      },
      (error) => {
        alert(error);
      }
    );
  }
}
