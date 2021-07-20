import { Component, OnInit, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],  
  encapsulation: ViewEncapsulation.None
})
export class ImageComponent implements OnInit {
  @Input() imgUrl: string | undefined;
  @Input() name: string | undefined;
  @Input() iconClass: string | undefined;
  @Output() iconClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.iconClick.emit();
  }
}
