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
  mySelect: string;
  selectedValue: Product[] = [];

  // priceFilter = ['$0 - $500', '$501 - $1000', '$1001 - $1500', '$1501 - $2000', '$2001 - $2500', '$2501 - $3000', '$3001 - $3500', '$3501 - $4000', '$4001 - $4500', '$4501 - $5000'];
  priceFilter = ['Sorting by Lowest Price', 'Sorting by Highest Price', 'Sorting by Highest Discount', 'Sorting by Highest Rating', 'Sorting by Default']; 
  // priceFilter = this.products.map(x => x.price +'-'+ (x.price + 500));


  constructor() { }

  ngOnInit(): void {
  }

  changeGrid() {
    this.layoutStyle = 'product-grid';
  }

  changeList() {
    this.layoutStyle = 'product-list'
  }

  addCart() {
    console.log('Add');
  }

  selectChange(val) {
    this.applyFilter(val.target.options.selectedIndex)
  }

  applyFilter(i) {
    console.log(i);
    switch(i) { 
      case 1: { 
          this.selectedValue = this.products.sort((a: any, b: any) => a.price - b.price); 
          break; 
      } 
      case 2: { 
          this.selectedValue = this.products.sort((a: any, b: any) => b.price - a.price); 
          break; 
      }
      case 3: { 
          this.selectedValue = this.products.sort((a: any, b: any) => b.discount - a.discount); 
          break; 
        }
        case 4: { 
          this.selectedValue = this.products.sort((a: any, b: any) => b.rating - a.rating); 
          break; 
      } 
      default: { 
          this.selectedValue = this.products.sort((a:any, b:any) => a.id - b.id)
          break; 
      } 
    } 
  }
}
