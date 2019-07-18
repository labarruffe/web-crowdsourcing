import { Component } from '@angular/core';
import { ProjectOwner } from './models/project-owner';
import { ProjectOwnerService } from './services/project-owner.service';
import { Volunteer } from './models/volunteer';
import { VolunteerService } from './services/volunteer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stepControl = 1;
  titleOfSecondStep = '';

  constructor(
    private projectOwnerService: ProjectOwnerService,
    private volunteerService: VolunteerService,
  ){}

  chooseRole(fullName: string, isProjectOwner: boolean) {
    this.stepControl = 2;
    if (isProjectOwner) {
      this.titleOfSecondStep = 'Cadastrar projeto';
      const projectOwner = new ProjectOwner('', fullName);
      this.projectOwnerService.post(projectOwner).subscribe(
        (response) => {
          alert(response);
        },
        (error) => {
          alert(error);
        }
      );
    } else {
      this.titleOfSecondStep = 'Voluntariar-se em um projeto';    
      const volunteer = new Volunteer('', fullName);
      this.volunteerService.post(volunteer).subscribe(
        (response) => {
          alert(response);
        },
        (error) => {
          alert(error);
        }
      );  
    }
  }
}
