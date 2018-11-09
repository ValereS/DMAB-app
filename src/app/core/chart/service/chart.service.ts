import { Injectable } from '@angular/core';
import { LoggerService } from '../../logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  colorSetBasic = ["#c6ebbe", "#a9dbb8", "#7ca5b8", "#38369a", "#020887"];
  colorSetAntic = ["#F1E2DA", "#777E7A", "#6E472A", "#A2735D", "#192A24"];
  colorSet3 = ["#FDFFFC", "#235789", "#C1292E", "#F1D302", "#020100"];
  colorSet4 = ["#3FB8AF", "#7FC7AF", "#DAD8A7", "#FF9E9D", "#FF3D7F", "#E592B9", "#B75907", "#A3222F"];
  colorSet5 = ["#3f4b3b", "#44633f", "#5a9367", "#5cab7d", "#4adbc8"];

  constructor(
    private logger: LoggerService
  ) {
  }
}
