import { TimelineEvent } from './timeline-event';

export class Tournament {
    title: string;
    startDate: Date;
    endDate: Date;
    events: TimelineEvent[];

    constructor() {
        this.title = '';
        this.startDate = new Date();
        this.endDate = new Date();
        this.events = [];
    }

    public static validate(object: Tournament): boolean {
        return object.isValid();
    }

    public isValid(): boolean {
        if (
            this.title && this.title.length < 100 &&
            this.startDate && this.startDate >= new Date() &&
            this.endDate && this.endDate > this.startDate
          ) {
            return true;
        } else {
          return false;
        }
    }
}
