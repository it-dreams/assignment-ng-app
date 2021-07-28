import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Timer2Component } from './timer2.component';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { TimerControllerComponent } from './timer-controller/timer-controller.component';

@NgModule({
  declarations: [
    // Timer2Component  
    // CountDownTimerComponent,
    // TimerControllerComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class Timer2Module { }
