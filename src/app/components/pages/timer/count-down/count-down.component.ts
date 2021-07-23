import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss'],  
  encapsulation: ViewEncapsulation.None
})
export class CountDownComponent implements OnInit {
  @Input() initialCountDown: number;


  // @Input() name: string;
 //  @Output() event: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

}
