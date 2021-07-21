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

  priceFilter = ['$0 - $500', '$501 - $1000', '$1001 - $1500', '$1501 - $2000', '$2001 - $2500', '$2501 - $3000', '$3001 - $3500', '$3501 - $4000', '$4001 - $4500', '$4501 - $5000'];

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
