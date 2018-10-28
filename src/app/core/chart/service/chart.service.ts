import { Injectable } from '@angular/core';
import { LoggerService } from '../../../shared/logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  colorSetBasic = ["#c6ebbe", "#a9dbb8", "#7ca5b8", "#38369a", "#020887"];
  colorSetAntic = ["#F1E2DA", "#777E7A", "#6E472A", "#A2735D", "#192A24"];

  constructor(
    private logger: LoggerService
  ) {
  }
}
