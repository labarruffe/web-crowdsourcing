import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectOwnerService } from './services/project-owner.service';
import { ProjectOwnerComponent } from './components/project-owner/project-owner.component';
import { ProjectComponent } from './components/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectOwnerComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ProjectOwnerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
