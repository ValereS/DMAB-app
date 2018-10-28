import { Component, OnInit } from '@angular/core';
import { Adherent } from '../../../shared/dto/adherent';
import { AdherentService } from '../service/adherent.service';
import { LoggerService } from '../../../shared/logger/logger.service';

@Component({
  selector: 'dmab-adherent-details',
  templateUrl: './adherent-details.component.html',
  styleUrls: ['./adherent-details.component.scss']
})
export class AdherentDetailsComponent implements OnInit {

  informationsLoaded: boolean;
  adherents: Array<Adherent>;

  constructor(
    private adherentService: AdherentService,
    private logger: LoggerService
  ) {}

  ngOnInit() {
    this.informationsLoaded = false;
    this.getInformations();
  }

  getInformations(): void {
    this.adherentService.getAdherents().subscribe(
      fetched => {
        this.adherents = fetched.adherents;
      },
      error => this.logger.error('##adherent## not fetched'),
      () => this.logger.info("Adherents:", this.adherents)
    );
  }
}
