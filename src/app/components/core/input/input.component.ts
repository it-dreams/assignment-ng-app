import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputComponent implements OnInit {

  @Input() type: string | undefined;
  @Input() name: string | undefined;
  @Input() value: string | undefined;
  @Input() placeholder: string | undefined;
  @Input() inputStyle: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
