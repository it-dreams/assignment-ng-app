import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'substring'
})
export class SubstringPipe implements PipeTransform {
    transform(value: any, limit: number) {
        if (value.length > limit ) {
            return value.substr(0, limit) + ' ...';
        } else {
            return value;
        }
    }
}