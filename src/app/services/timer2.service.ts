import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Timer2Service {
  
  setLimitSubject = new Subject<any>();
  startTimerSubject = new Subject<any>();
  resetTimerSubject = new Subject<any>();
  RunningTimerSubject = new Subject<any>();
  timerStateSubject = new Subject<any>();
  pausedHistorySubject = new Subject<any>();
  
  constructor() { }

}
