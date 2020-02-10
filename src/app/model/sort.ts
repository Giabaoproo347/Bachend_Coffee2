import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'sort', pure: false})
export class SortByLike implements PipeTransform {
  transform(array: any, like: string): any[] {
    if (!Array.isArray(array)) {
      return;
    }
    array.sort((a: number, b: number) => {
      if (a[like] > b[like]) {
        return -1;
      } else if (a[like] > b[like]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
