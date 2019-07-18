import { Volunteer } from "./volunteer";
import { ProjectOwner } from "./project-owner";

export class Project {
    _id: string;
    topic: string;
    title: string;
    owner: ProjectOwner;
    volunteers: Volunteer[];

    constructor(_id: string, topic: string, title: string, owner: ProjectOwner, volunteers: Volunteer[]) {
        this._id = _id;
        this.topic = topic;
        this.title = title;
        this.owner = owner;
        this.volunteers = volunteers;
    }
}
  