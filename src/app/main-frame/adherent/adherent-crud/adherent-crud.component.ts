import { Component, OnInit, Input } from '@angular/core';
import { LoggerService } from '../../../core/logger/logger.service';
import { Adherent } from '../../../shared/dto/adherent';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TownService } from '../../../core/townService/town.service';
import { TownWS } from '../../../core/townService/town-ws';
import { FormService } from '../../../core/formService/form.service';
import { AdherentService } from '../service/adherent.service';
import { DateUtil } from '../../../util/date-util';

@Component({
  selector: 'dmab-adherent-crud',
  templateUrl: './adherent-crud.component.html',
  styleUrls: ['./adherent-crud.component.scss']
})
export class AdherentCRUDComponent implements OnInit {
  @Input() adherents: Array<Adherent>;
  genders: string[];
  townWSList: TownWS[];
  townNameWSList: string[];
  loadingAction: boolean;

  adherentFG: FormGroup;

  ableToSave: boolean;
  errorUnableToSave: boolean;

  constructor(
    private logger: LoggerService,
    private fb: FormBuilder,
    private townService: TownService,
    private formService: FormService,
    private adherentService: AdherentService
  ) { }

  ngOnInit() {
    this.initReactiveForm();
    this.genders = ["Homme", "Femme", "Non binaire"];
    this.townWSList = new Array<TownWS>();
  }

  initReactiveForm() {
    this.adherentFG = this.fb.group({
      name: ['tre', [Validators.required, Validators.minLength(2)]],
      firstname: ['art', [Validators.required, Validators.minLength(2)]],
      gender: ['', [Validators.required]],
      birthday: ['2000-01-20', [Validators.required]],
      signUpDate: ['2019-01-21', [Validators.required]],
      postalCode: ['654', [Validators.required]],
      town: ['trara', [Validators.required]]
    });
  }

  onSubmit() {
    this.prevalidation();
    if (this.adherentFG.valid) {
      this.logger.info("new Adherent!!");
      this.errorUnableToSave = false;
      this.ableToSave = false;
      let formData: FormGroup = Object.assign({});
      formData = Object.assign(formData, this.adherentFG.value);
      this.loadingAction = true;
      this.adherentService.storeAdherent(this.buildingBody(formData)).subscribe(
        res => {
          this.logger.info("adherent stored");
          this.ableToSave = true;
        }, error => {
          this.logger.info("adherent not storred");
          this.errorUnableToSave = true;
          this.loadingAction = false;
        }, () => this.loadingAction = false
      );
    } else {
      this.logger.info("something is wrong");
    }
  }

  cannotValidate(): boolean {
    return !(this.adherentFG.valid && this.adherentFG.touched);
  }

  getTownList($event) {
    const townName = this.adherentFG.get("town").value;
    this.logger.debug("XXX", this.adherentFG.get("town").value);

    if (townName.length > 4) {
      this.townService.getTownWithCP(townName).subscribe(
        townData => {
          if (townData.length > 0) {
            this.townWSList = townData;
            this.townNameWSList = [];
            this.townWSList.forEach(element => {
              this.townNameWSList.push(element.nom);
            });
            this.logger.debug("ZZZZ", this.townWSList[0].nom);
          }
        }, errors => {
          this.logger.debug(errors);
        }
      );
    }
  }

  fetchCPData() {
    const selectedTownName = this.adherentFG.get("town").value;
    this.townWSList.forEach(element => {
      if (element.nom === selectedTownName) {
        this.adherentFG.get("postalCode").setValue(element.codesPostaux[0]);
      }
    });
  }

  reset() {
    if (!this.adherentFG.pristine) {
      this.adherentFG.reset();
    }
  }

  prevalidation() {
    const controlNames = ["name", "firstname", "postalCode", "town"];
    this.formService.trimFormGroupValue(controlNames, this.adherentFG);
  }

  buildingBody(formData: any): Adherent {
    const newAdherent: Adherent = {
      id: null,
      nom: formData.name,
      prenom: formData.firstname,
      birthdayDate: formData.birthday,
      age: DateUtil.getAge(formData.birthday),
      sexe: null,
      association: "",
      connuPar: "",
      inscriptionDate: formData.signUpDate,
      fraisInscription: 0,
      autre: "",
      actif: 1,
      supprime: 0,
      statut: "",
      adresse_id: null,
      adherent: {
        id: null,
        numeroVoie: "changeme",
        typeVoie: "changeme",
        nomVoie: "changeme",
        commentaire: "",
        ville: {
          id: null,
          codePostal: formData.postalCode,
          nom: formData.town
        }
      }
    };
    return newAdherent;
  }
}
