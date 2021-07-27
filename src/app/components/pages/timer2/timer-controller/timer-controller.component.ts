import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Timer2Service } from 'src/app/services/timer2.service';

@Component({
  selector: 'app-timer-controller',
  templateUrl: './timer-controller.component.html',
  styleUrls: ['./timer-controller.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TimerControllerComponent implements OnInit {

  timerState: string = 'Start' || 'Pause';
  pausedValue: number[]= [];
  // limit: number;

  constructor(private _timerService : Timer2Service) { }

  ngOnInit(): void {
    this._timerService.timerStateSubject.subscribe(res => this.timerState = res);
    this._timerService.pausedHistorySubject.subscribe(res => this.pausedValue = res);
  }

  setLimit(event) {
    this._timerService.setLimitSubject.next(event.value);
  }

  clickStart(data) {
    this._timerService.startTimerSubject.next(data);
  }

  clickReset(data) {
    this._timerService.resetTimerSubject.next(data);
  }
}
