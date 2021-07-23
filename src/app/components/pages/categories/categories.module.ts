import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CategoriesComponent } from './categories.component';
// import { ButtonComponent } from '../../core/button/button.component';
// import { ImageComponent } from '../../core/image/image.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [
    // CategoriesComponent,
    // ButtonComponent,
    // ImageComponent
  
    RatingComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA 
  ]
})
export class CategoriesModule { }
