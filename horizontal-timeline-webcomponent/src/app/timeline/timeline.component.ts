import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TimelineEvent } from '../entities/timeline-event';
import { DateUtils } from '../util/DateUtils';

@Component({
  selector: 'app-timeline',
  // tslint:disable-next-line:max-line-length
  template: `<h1>{{_eventTitle}}{{counter}}</h1><div class="iti-horizontal-timeline" style="overflow: hidden; padding-bottom: 35px"> <div *ngFor="let myEvent of events" [style.width]="_percentWidth+'%'" [className]="myEvent.styleClass"> <div class="iti-timeline-event haveEvent" *ngIf="myEvent.eventType !==0"></div><div class="iti-timeline-event" *ngIf="myEvent.eventType===0"></div><div class="iti-timeline-event-content" *ngIf="myEvent.eventType !==0">{{myEvent.eventDate | date: 'dd/MM/yyyy'}}</div><div class="iti-timeline-event-content iti-timeline-event-content-title" *ngIf="myEvent.eventType !==0">{{myEvent.title}}</div></div></div><div class="row"> <div *ngFor="let summ of _summoners" class="col-md-4" (click)="invocadorClickado()">{{summ}}</div></div>`,
  // tslint:disable-next-line:max-line-length
  styles: ['iti-horizontal-timeline{overflow:hidden}iti-horizontal-timeline div{background-color:transparent;border:2px solid;border-radius:50%;-webkit-transition:background-color .3s,border-color .3s;-moz-transition:background-color .3s,border-color .3s;transition:background-color .3s,border-color .3s;border-color:#ef4138!important}.iti-timeline-container{height:40px;float:left;margin-bottom:5px}.iti-timeline-container-passed-date{border-bottom:3px solid #f89b34}.iti-timeline-container-nopassed-date{border-bottom:3px solid #fce8cf}.iti-timeline-event{width:10px;height:10px;position:relative;top:33px;left:44%}.odd-event .iti-timeline-event-content{position:relative;width:300px;font-size:9pt;left:22%;top:3px}.odd-event .iti-timeline-event-content-title{top:-28px}.even-event .iti-timeline-event-content{position:relative;width:300px;font-size:9pt;left:22%;top:37px}.even-event .iti-timeline-event-content-title{top:34px}.haveEvent{border-radius:25px!important;background:red}']
})
export class TimelineComponent implements OnInit {
  public _startDate: Date;
  public _endDate: Date;
  public _events: TimelineEvent[] = [];
  public _eventTitle: String = '';
  public _summoners: String[] = [];

  counterValue = 0;

  public _percentWidth: number;

  @Output()
  public summonerClicker: EventEmitter<any> = new EventEmitter<any>();

  @Output() eventsChange = new EventEmitter();

  @Output() counterChange = new EventEmitter();

  @Input()
  get counter() {
    return this.counterValue;
  }

  set counter(val) {
    this.counterValue = val;
    this.counterChange.emit(this.counterValue);
  }

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
    get events() {
        return this._events;
    }

    set events(val) {
        if (val) {
            this._events = val;
            this.eventsChange.emit(this._events);
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
