/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AgePipe } from './age.pipe';

describe('Pipe: AgePipee', () => {
let agePipe: AgePipe;

  beforeEach(() => {
    agePipe = new AgePipe();
  });


  it('create an instance', () => {
    expect(agePipe).toBeTruthy();
  });

  fit('test pipe', () => {
    const bDay = new Date(1988, 8, 29);
    const years = new Date().getFullYear();
    const age = years - bDay.getFullYear();
    let result = agePipe.transform(bDay);
    expect(result).toEqual(age);
  });
});
