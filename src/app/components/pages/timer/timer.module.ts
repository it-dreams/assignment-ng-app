import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer.component';
import { CountDownComponent } from './count-down/count-down.component';
import { TimerControlComponent } from './timer-control/timer-control.component';
import { ButtonComponent } from '../../core/button/button.component';
import { InputComponent } from '../../core/input/input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // ButtonComponent,
    // InputComponent,
    // TimerComponent,
    // CountDownComponent,
    // TimerControlComponent
  ],
  imports: [
    CommonModule,
    // FormsModule
  ],
  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA 
  ]
})
export class TimerModule { }
