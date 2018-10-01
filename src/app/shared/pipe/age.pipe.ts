import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(birthDate: string): number {
    const now = new Date().getTime();
    const bDay = new Date(birthDate).getTime();
    return new Date(now - bDay).getUTCFullYear() - 1970;
  }

}
