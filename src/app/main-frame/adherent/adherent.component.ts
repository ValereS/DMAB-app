import { Component, OnInit } from '@angular/core';
import { Adherent } from '../../shared/dto/adherent';
import { AdherentService } from './service/adherent.service';
import { AgePipe } from '../../shared/pipe/age.pipe';
import { LoggerService } from '../../shared/logger/logger.service';

@Component({
  selector: 'dmab-adherent',
  templateUrl: './adherent.component.html',
  styleUrls: ['./adherent.component.scss']
})
export class AdherentComponent implements OnInit {

  constructor(
    private adherentService: AdherentService,
    private logger: LoggerService
  ) {}

  ngOnInit() {
  }
}
