import { Component, OnInit, Input } from '@angular/core';
import { Adherent } from '../../../shared/dto/adherent';
import { AdherentService } from '../service/adherent.service';
import { LoggerService } from '../../../shared/logger/logger.service';

@Component({
  selector: 'dmab-adherent-details',
  templateUrl: './adherent-details.component.html',
  styleUrls: ['./adherent-details.component.scss']
})
export class AdherentDetailsComponent implements OnInit {
  @Input() adherents: Array<Adherent>;
  informationsLoaded: boolean;

  constructor(
    private logger: LoggerService
  ) {}

  ngOnInit() {
  }
}
