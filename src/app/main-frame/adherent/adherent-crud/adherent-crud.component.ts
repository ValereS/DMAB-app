import { Component, OnInit, Input } from '@angular/core';
import { LoggerService } from '../../../core/logger/logger.service';
import { Adherent } from '../../../shared/dto/adherent';

@Component({
  selector: 'dmab-adherent-crud',
  templateUrl: './adherent-crud.component.html',
  styleUrls: ['./adherent-crud.component.scss']
})
export class AdherentCRUDComponent implements OnInit {
  @Input() adherents: Array<Adherent>;

  constructor(private logger: LoggerService) { }

  ngOnInit() {
  }

}
