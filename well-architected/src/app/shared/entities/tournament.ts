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
}
