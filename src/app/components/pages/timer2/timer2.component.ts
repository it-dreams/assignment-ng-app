import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Timer2Service } from 'src/app/services/timer2.service';

@Component({
  selector: 'app-timer2',
  templateUrl: './timer2.component.html',
  styleUrls: ['./timer2.component.scss'],  
  encapsulation: ViewEncapsulation.None
})
export class Timer2Component implements OnInit {
  startCount: number = 0;
  pausedCount: number = 0;
  resetTime: number;
  latestDate: Date[] = [];
  pausedTime: number[] = [];
  initialTimer: number = 1000;
  currentTimer: number;
  
  interval: any;
  initialState = 'Start' || 'Pause';

  constructor(private _timerService: Timer2Service) { 
    this.currentTimer = this.initialTimer;
  }

  ngOnInit() {
    this._timerService.setLimitSubject.subscribe(res => {
      this.initialTimer = res;
      this.currentTimer = this.initialTimer;
    });
    this._timerService.startTimerSubject.subscribe(res => {
      this.changeState();
    });
    this._timerService.resetTimerSubject.subscribe(res => {
      this.resetState();
    });
  }

  changeState() {
    if(this.initialState == 'Start') {
      this.startTimer();    
      if(!this.startCount) {
        this.startCount = this.startCount +1;        
        this.latestDate.unshift(new Date());
      } else {
        this.startCount;
        this._timerService.RunningTimerSubject.next(this.currentTimer);
      }
    } else if(this.initialState == 'Pause') {
      this.pauseTimer();      
      this.pausedCount = this.pausedCount +1 ;
      this.pausedTime.unshift(this.currentTimer);
      this._timerService.pausedHistorySubject.next(this.pausedTime);
      this._timerService.RunningTimerSubject.next(this.currentTimer);
    } else {
      this.startTimer();    
      this.startCount = this.startCount +1;
      this.latestDate.unshift(new Date());
    }
  }

  startTimer() {
    this.pauseTimer();
    this.interval = setInterval(() => { 
      if (this.currentTimer > 0) {
        this.currentTimer = this.currentTimer - 1;
        this.initialState = 'Pause';
        this._timerService.timerStateSubject.next(this.initialState);
        this._timerService.RunningTimerSubject.next(this.currentTimer);
      } else {
        this.initialState = 'Start';
      }
    }, 1000);
  }
  
  pauseTimer() {
    if (this.interval && this.startCount) {
      clearInterval(this.interval);
      this.initialState = 'Resume';
      this._timerService.timerStateSubject.next(this.initialState);
    }
  }
  
  resetState() {
    clearInterval(this.interval);
    this.initialState = 'Start';
    this.currentTimer = this.initialTimer;
    this.latestDate = [];
    this.pausedTime = [];
    this.startCount = 0;
    this.pausedCount = 0;
    this._timerService.timerStateSubject.next(this.initialState);
    this._timerService.RunningTimerSubject.next(this.currentTimer);
    this._timerService.pausedHistorySubject.next(this.pausedTime);
  }

}
