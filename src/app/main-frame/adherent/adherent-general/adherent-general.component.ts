import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Adherent } from '../../../shared/dto/adherent';
import { LoggerService } from '../../../core/logger/logger.service';

@Component({
  selector: 'dmab-adherent-general',
  templateUrl: './adherent-general.component.html',
  styleUrls: ['./adherent-general.component.scss']
})
export class AdherentGeneralComponent implements OnInit {
  @Input() adherents: Array<Adherent>;
  informationsLoaded: boolean;

  constructor(
    private logger: LoggerService
  ) {}

  ngOnInit() {
  }
}
