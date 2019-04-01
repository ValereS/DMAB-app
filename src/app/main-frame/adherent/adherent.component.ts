import { Component, OnInit } from '@angular/core';
import { Adherent } from '../../shared/dto/adherent';
import { AdherentService } from './service/adherent.service';
import { LoggerService } from '../../core/logger/logger.service';

@Component({
  selector: 'dmab-adherent',
  templateUrl: './adherent.component.html',
  styleUrls: ['./adherent.component.scss']
})
export class AdherentComponent implements OnInit {

  dataLoaded: boolean;
  adherents: Array<Adherent>;
  title: string[] = ["Vue d'ensemble", "Graphiques", "Ajouter un membre"];

  constructor(
    private adherentService: AdherentService,
    private logger: LoggerService
  ) {}

  ngOnInit() {
    this.dataLoaded = false;
    this.getInformations();
  }

  getInformations(): void {
    this.adherentService.getAdherents().subscribe(
      fetched => {
          this.adherents = fetched;
      },
      error => this.logger.error('##adherent## not fetched: '),
      () => {
        this.dataLoaded = true;
        this.logger.info("Adherents:", this.adherents);
      }
    );
  }
}
