import { Volunteer } from "./volunteer";
import { ProjectOwner } from "./project-owner";

export class Project {
    topic: string;
    title: string;
    owner: ProjectOwner;
    volunteers: Volunteer[];
}
  