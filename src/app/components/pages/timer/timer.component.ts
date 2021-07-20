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
  initialTimer: number = 1000;
  initialDate: Date = new Date();
  // startedTime: any;
  pausedTime: number = 0;
  resetTime: number | undefined;
  currentTimer = this.initialTimer;
  currentDate: any;
  
  interval: any;
  initialState = 'Start' || 'Pause';
  isComplete: boolean = false;

  constructor() { }

  ngOnInit() { }

  changeState() {
    if(this.initialState == 'Start') {
      this.startTimer();    
      if(!this.startCount) {
        this.startCount = this.startCount +1;        
        // this.currentDate = this.initialDate;
      } else {
        this.startCount;        
        // this.currentDate = this.initialDate;
      }
    } else if(this.initialState == 'Pause') {
      this.pauseTimer();      
      this.pausedCount = this.pausedCount +1 ;
      this.pausedTime = this.currentTimer;
      // this.currentDate = this.initialDate;
    } else {
      this.startTimer();    
      this.startCount = this.startCount +1;
      // this.currentDate = this.initialDate;
    }
  }

  startTimer() {
    this.pauseTimer();
    this.interval = setInterval(() => { 
      if (this.currentTimer > 0) {
        this.currentTimer = this.currentTimer - 1;
        console.log(this.currentTimer);
        this.initialState = 'Pause';
        this.currentDate = this.initialDate;
      } else {
        this.initialState = 'Start';
        this.currentDate = this.initialDate;
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
    this.startCount = 0;
    this.pausedCount = 0;
  }

}
