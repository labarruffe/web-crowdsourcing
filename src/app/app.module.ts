import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectOwnerService } from './services/project-owner.service';
import { VolunteerService } from './services/volunteer.service';
import { ProjectService } from './services/project.service';
import { ProjectOwnerComponent } from './components/project-owner/project-owner.component';
import { ProjectComponent } from './components/project/project.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProjectListComponent } from './components/project-list/project-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectOwnerComponent,
    ProjectComponent,
    ProjectListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    ProjectOwnerService,
    VolunteerService,
    ProjectService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
