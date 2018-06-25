export interface TimelineEventInterface {
    eventDate: Date;
    title: string;
    description: string;
    eventType: number;
    styleClass: string;
}

export class TimelineEvent implements TimelineEventInterface{
    eventDate: Date;
    title: string;
    description: string;
    eventType: number;
    styleClass: string;

    constructor(object?: TimelineEvent){
        if(object){
            this.title = object.title;
            this.description = object. description;
            this.eventDate = object.eventDate;
            this.eventType = object.eventType;
            this.styleClass = object.styleClass;
        }
    }

}
