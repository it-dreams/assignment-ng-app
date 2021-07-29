import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PageNotFoundComponent }])
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PageNotFoundModule { 
  constructor() {
    console.log('404 module')
  }
}
