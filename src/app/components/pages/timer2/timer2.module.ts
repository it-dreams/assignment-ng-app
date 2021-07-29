import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Timer2Component } from './timer2.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../core/core-module.module';
import { TimerControllerComponent } from './timer-controller/timer-controller.component';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';

@NgModule({
  declarations: [
    Timer2Component,
    TimerControllerComponent,
    CountDownTimerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Timer2Component }]),
    CoreModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class Timer2Module { 
  constructor() {
    console.log('Timer2 module')
  }
}
