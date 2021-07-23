import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-timer-control',
  templateUrl: './timer-control.component.html',
  styleUrls: ['./timer-control.component.scss'],  
  encapsulation: ViewEncapsulation.None
})
export class TimerControlComponent implements OnInit {

  @Input() timerState: string;
  @Input() pausedValue: number[]= [];
  @Input() isDisabled: boolean = false;;
  @Output() start = new EventEmitter();
  @Output() reset = new EventEmitter();
  // @Output() updatedValue = new EventEmitter<number>();
  
  
  @Input() limit: number;
  // @Output() updatedValue: EventEmitter<any> = new EventEmitter();

  // @Input() name: string;
  @Output() event: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  clickStart() {
    this.start.emit();
  }

  clickReset() {
    this.reset.emit();
  }

  // setTimerLimit() {
  //   this.updatedValue.emit(this.limit);
  // }

  click1() {
    this.event.emit(this.limit);
  }

}
