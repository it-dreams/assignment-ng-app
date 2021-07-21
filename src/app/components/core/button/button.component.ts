import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {
  @Input() text: string; 
  @Input() backgroundColor: string; 
  @Input() color: string; 
  @Input() disabled: boolean; 
  @Input() btnClass: string; 
  @Input() iconClass: string; 
  @Output() btnClick= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    // console.log('Clicked');
    this.btnClick.emit();
  }
}
