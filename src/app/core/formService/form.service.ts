import { Injectable } from "@angular/core";
import { FormGroup } from "../../../../node_modules/@angular/forms";
import { LoggerService } from "../logger/logger.service";

@Injectable({
  providedIn: "root"
})
export class FormService {
  constructor(private logger: LoggerService) {}

  trimFormGroupValue(controlName: string[], formGroup: FormGroup) {
    controlName.forEach((control, index) => {
      const trimmedCtrl = formGroup.get(controlName[index]).value.trim();
      if (trimmedCtrl.length === 0) {
        this.logger.debug("AD-", "empty trim value");
        formGroup.get(controlName[index]).markAsTouched();
      }
      formGroup.get(controlName[index]).setValue(trimmedCtrl);
    });
  }

  isControlInvalidAndTouched(controlName: string, formGroup: FormGroup): boolean {
    return formGroup.controls[controlName].invalid && formGroup.controls[controlName].touched;
  }
}
