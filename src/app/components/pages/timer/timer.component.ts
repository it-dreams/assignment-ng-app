import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],  
  encapsulation: ViewEncapsulation.None
})
export class TimerComponent implements OnInit {
  startCount: number = 0;
  pausedCount: number = 0;
  // initialTimer: number = 1000;
  resetTime: number;
  // currentTimer = this.initialTimer;
  latestDate: Date[] = [];
  pausedTime: number[] = [];

  
  interval: any;
  initialState = 'Start' || 'Pause';
  isComplete: boolean = false;
  isDisabled: boolean = false;

  initialTimer: number = 100;
  currentTimer = this.initialTimer;

  constructor() { }

  ngOnInit() { }

  changeState() {
    // this.isDisabled = true
    if(this.initialState == 'Start') {
      this.startTimer();    
      if(!this.startCount) {
        this.startCount = this.startCount +1;        
        this.latestDate.unshift(new Date());
      } else {
        this.startCount;
      }
    } else if(this.initialState == 'Pause') {
      this.pauseTimer();      
      this.pausedCount = this.pausedCount +1 ;
      this.pausedTime.unshift(this.currentTimer);
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
        console.log(this.currentTimer);
        this.initialState = 'Pause';
      } else {
        this.initialState = 'Start';
      }
    }, 1000);    
  }

  pauseTimer() {
    if (this.interval && this.startCount) {
      clearInterval(this.interval);
      this.initialState = 'Resume';
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
  }

  recivedTimerValue($event) {
    this.initialTimer = $event;
  }

  
  // name = 'Angular';
  childEvent($event){
    this.initialTimer = $event;
  }

}
