import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {
  @Input() text: string | undefined; 
  @Input() backgroundColor: string | undefined; 
  @Input() color: string | undefined; 
  @Input() btnClass: string | undefined; 
  @Output() btnClick= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    // console.log('Clicked');
    this.btnClick.emit();
  }
}
