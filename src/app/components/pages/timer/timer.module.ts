import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TimerComponent } from './timer.component';
import { CountDownComponent } from './count-down/count-down.component';
import { TimerControlComponent } from './timer-control/timer-control.component';
import { CoreModule } from '../../core/core-module.module';

@NgModule({
  declarations: [
    TimerComponent,
    CountDownComponent,
    TimerControlComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TimerComponent }]),
    FormsModule,
    CoreModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TimerModule { 
  constructor() {
    console.log('Timer module')
  }
}
