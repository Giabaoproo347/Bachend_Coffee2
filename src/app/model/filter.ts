import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'filterByStatus'})
export class FilterByStatusPipe implements PipeTransform {
  transform(arr: string[], searchValue: string): any {
    if (!searchValue) {
      return arr;
    }
    return arr.filter(value => {
      return value.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    });
  }
}
