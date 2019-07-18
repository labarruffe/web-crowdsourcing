import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectOwnerService } from './services/project-owner.service';
import { VolunteerService } from './services/volunteer.service';
import { ProjectOwnerComponent } from './components/project-owner/project-owner.component';
import { ProjectComponent } from './components/project/project.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProjectOwnerComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    ProjectOwnerService,
    VolunteerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
