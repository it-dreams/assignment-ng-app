import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputComponent implements OnInit {

  @Input() type: string;
  @Input() name: string;
  @Input() value: string;
  @Input() ngModel: number;
  @Input() placeholder: string;
  @Input() inputStyle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
