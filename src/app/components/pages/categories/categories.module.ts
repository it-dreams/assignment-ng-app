import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { RatingComponent } from './rating/rating.component';
import { CoreModule } from '../../core/core-module.module';

@NgModule({
  declarations: [
    CategoriesComponent,
    RatingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CategoriesComponent }]),
    CoreModule
  ],
  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA 
  ]
})
export class CategoriesModule { 
  constructor() {
    console.log('Category module')
  }
}
