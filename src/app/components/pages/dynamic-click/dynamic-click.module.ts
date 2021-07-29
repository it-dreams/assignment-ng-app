import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicClickComponent } from './dynamic-click.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../core/button/button.component';

@NgModule({
  declarations: [
    DynamicClickComponent,
    // ButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DynamicClickComponent }]),
    ScrollingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DynamicClickModule { 
  constructor() {
    console.log('Dynamic Click module')
  }
}
