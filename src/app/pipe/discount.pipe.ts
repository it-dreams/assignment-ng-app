import { Pipe, PipeTransform } from '@angular/core';
import { stubString } from 'lodash';

@Pipe({
    name: 'discount'
})
export class DiscountPipe implements PipeTransform {
    transform(price: number, discount: number) {
        return price - (price * discount / 100) +' '+ price;
    }
}