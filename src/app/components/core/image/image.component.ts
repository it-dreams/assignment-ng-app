import { Component, OnInit, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],  
  encapsulation: ViewEncapsulation.None
})
export class ImageComponent implements OnInit {
  @Input() imgUrl: string;
  @Input() name: string;
  @Input() iconClass: string;
  @Output() iconClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.iconClick.emit();
  }
}
