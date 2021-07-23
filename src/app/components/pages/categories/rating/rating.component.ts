import { Component, Input, OnChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RatingComponent {

  @Input() rating: number;
  starWidth: number;

  ngOnChanges() {
    this.starWidth = this.rating * 90/5;
  }

}
