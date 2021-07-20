import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-timer-control',
  templateUrl: './timer-control.component.html',
  styleUrls: ['./timer-control.component.scss'],  
  encapsulation: ViewEncapsulation.None
})
export class TimerControlComponent implements OnInit {

  @Input() timerState: string | undefined;
  @Input() pausedValue: number | undefined;
  @Input() setTimerValue: any;
  @Output() start = new EventEmitter();
  @Output() reset = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickStart() {
    this.start.emit();
  }

  clickReset() {
    this.reset.emit();
  }

}
