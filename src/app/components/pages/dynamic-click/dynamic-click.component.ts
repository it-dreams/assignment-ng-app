import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-click',
  templateUrl: './dynamic-click.component.html',
  styleUrls: ['./dynamic-click.component.scss']
})
export class DynamicClickComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  repeatedDiv(n: number): Array<number> {
    return Array(n);
  }

  clickedDiv(index: number) {
    alert(`Button in ${index +1}th div clicked!`);
  }

}
