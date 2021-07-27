import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Timer2Service } from 'src/app/services/timer2.service';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CountDownTimerComponent implements OnInit {

  initialCountDown: number = 100;

  constructor(private _timerService: Timer2Service) { }

  ngOnInit() {
    this._timerService.RunningTimerSubject.subscribe(res => {
      this.initialCountDown = res;
    })
  }
}
