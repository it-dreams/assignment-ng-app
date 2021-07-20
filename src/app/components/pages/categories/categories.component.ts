import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PRODUCTS } from 'src/app/mock-data';
import { Product } from '../../../IProduct';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],  
  encapsulation: ViewEncapsulation.None
})
export class CategoriesComponent implements OnInit {

  iconGrid = '../../../../assets/img/grid10-10.png';
  iconList = '../../../../assets/img/list10-10.png';
  iconStyle: string = 'view-icon';
  btnStyle: string = 'add-cart';

  layoutStyle: string = 'product-grid' || 'product-list';

  products: Product[] = PRODUCTS;

  constructor() { }

  ngOnInit(): void {
  }

  changeGrid() {
    console.log('Grid');
    this.layoutStyle = 'product-grid';
  }

  changeList() {
    console.log('List');
    this.layoutStyle = 'product-list'
  }

  addCart() {
    console.log('Add');
  }

}
