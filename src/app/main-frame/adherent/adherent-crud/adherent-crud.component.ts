import { Component, OnInit, Input } from '@angular/core';
import { LoggerService } from '../../../core/logger/logger.service';
import { Adherent } from '../../../shared/dto/adherent';
import { FormBuilder, FormGroup, Validators } from '../../../../../node_modules/@angular/forms';
import { Gender } from '../../../shared/enum/gender.enum';

@Component({
  selector: 'dmab-adherent-crud',
  templateUrl: './adherent-crud.component.html',
  styleUrls: ['./adherent-crud.component.scss']
})
export class AdherentCRUDComponent implements OnInit {
  @Input() adherents: Array<Adherent>;
  genders: string[];

  adherentFG: FormGroup;

  constructor(
    private logger: LoggerService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initReactiveForm();
    this.genders = Object.keys(Gender).map(key => Gender[key]);
  }

  initReactiveForm() {
    this.adherentFG = this.fb.group({
      name: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      signUpDate: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
      town: ['', [Validators.required]],
    });
  }

  onSubmit() {

  }

}
