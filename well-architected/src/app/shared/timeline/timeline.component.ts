import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TimelineEvent } from '../entities/timeline-event';
import { DateUtils } from '../util/DateUtils';

@Component({
  selector: 'lol-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  private _startDate: Date;
  private _endDate: Date;
  private _events: TimelineEvent[] = [];
  private _eventTitle: String = '';
  private _summoners: String[] = [];

  private _percentWidth: number;

  @Output()
  public summonerClicker: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  public invocadorClickado() {
    this.summonerClicker.emit('Se ha clickado un invocador');
  }

  private loadData() {
      // Le sumamos 12 días para que no se nos solape al final el texto
      let numeroDiasEntreFechas = DateUtils.daysBetweenTwoDates(
          this._startDate,
          DateUtils.addDaysToDate(this._endDate, 0));

      let loopDate = this._startDate;

      let processedEvents : TimelineEvent[] = [];
      let today : Date = new Date();

      let odd = true;

      for (let i = 0; i < numeroDiasEntreFechas; i++) {
          let e = new TimelineEvent();

          e.eventDate = loopDate;
          e.styleClass = "iti-timeline-container ";

          if (e.eventDate <= today) {
              // La fecha ya ha pasado
              e.styleClass += "iti-timeline-container-passed-date";
          }
          else {
              // La fecha aún no ha llegado
              e.styleClass += "iti-timeline-container-nopassed-date";
          }

          let found = false;

          for (let j = 0; j < this._events.length; j++) {
              let compareDate = new Date(this._events[j].eventDate);

              if (compareDate.getFullYear() === loopDate.getFullYear() &&
                  compareDate.getMonth() === loopDate.getMonth() &&
                  compareDate.getDate() === loopDate.getDate()) {
                  let tevent: TimelineEvent = this._events[j];


                  if (odd) {
                      odd = false;
                      e.styleClass += " odd-event";
                  }
                  else {
                      e.styleClass += " even-event";
                      odd = true;
                  }

                  tevent.styleClass = e.styleClass;
                  tevent.eventDate = compareDate;

                  processedEvents.push(tevent);
                  found = true;
                  break;
              }
          }

          if (!found) {
              e.title = '';
              e.description = '';

              e.eventType = 0;
              processedEvents.push(e);
          }

          loopDate = DateUtils.addDaysToDate(loopDate, 1);
      }
      this._events = processedEvents;
      this._percentWidth = 100 / numeroDiasEntreFechas;
  }

  @Input()
    set startDate(sDate: string) {
        if (sDate) {
            this._startDate = new Date(sDate);
        }

        this.loadDataIfReady();
    }

    @Input()
    set endDate(eDate: string) {
        if(eDate) {
            this._endDate = new Date(eDate);
        }

        this.loadDataIfReady();
    }

    @Input()
    set events(myEvents: TimelineEvent[]) {
        if(myEvents) {
            this._events = myEvents;
        }

        this.loadDataIfReady();
    }

    @Input()
    set eventTitle(title: String) {
      if (title) {
        this._eventTitle = title;
      }

      this.loadDataIfReady();
    }

    @Input()
    set summoners(invocadores: String[]) {
      if (invocadores) {
        this._summoners = invocadores;
      }

      this.loadDataIfReady();
    }

    private loadDataIfReady() {
      if (this._startDate && this._endDate && this._events
         && this._eventTitle && this._summoners) {
          this.loadData();
      } else {
        // do nothing
      }
    }

}
