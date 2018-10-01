import { Component, OnInit } from '@angular/core';
import { Adherent } from '../../shared/dto/adherent';
import { AdherentService } from './service/adherent.service';
import { AgePipe } from '../../shared/pipe/age.pipe';

@Component({
  selector: 'dmab-adherent',
  templateUrl: './adherent.component.html',
  styleUrls: ['./adherent.component.scss']
})
export class AdherentComponent implements OnInit {

  informationsLoaded: boolean;
  adherents: Array<Adherent>;

  constructor(
    private adherentService: AdherentService
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
      error => console.log('##adherent## not fetched'),
      () => console.log("Adherents:", this.adherents)
    );
  }
}
