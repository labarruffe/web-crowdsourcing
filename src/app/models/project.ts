export class Project {
    _id: string;
    topic: string;
    title: string;
    owner_id: string;
    volunteers_id: string[];

    constructor(_id: string, topic: string, title: string, owner_id: string, volunteers_id: string[]) {
        this._id = _id;
        this.topic = topic;
        this.title = title;
        this.owner_id = owner_id;
        this.volunteers_id = volunteers_id;
    }
}
  