import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Timer2Component } from './timer2.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    Timer2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Timer2Component }])
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class Timer2Module { 
  constructor() {
    console.log('Timer2 module')
  }
}
