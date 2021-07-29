import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { ImageComponent } from './image/image.component';

// Custom Pipe
import { SubstringPipe } from 'src/app/pipe/substring.pipe';
import { DiscountPipe } from 'src/app/pipe/discount.pipe';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    ImageComponent,
    SubstringPipe,
    DiscountPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    ImageComponent,    
    SubstringPipe, // Custom pipe
    DiscountPipe // Custom pipe
  ]
})
export class CoreModule { }
