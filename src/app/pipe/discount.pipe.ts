import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'discount'
})
export class DiscountPipe implements PipeTransform {
    transform(price: number, discount: number) {
        // return price - (price * discount / 100) +' '+ price;
        return price - (price * discount / 100);
    }
}