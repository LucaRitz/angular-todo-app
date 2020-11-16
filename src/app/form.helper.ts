import {FormControl} from '@angular/forms';

export function getErrorMessage(control: FormControl): string {
  if (control.invalid) {
    return `FORM.ERROR.${Object.keys(control.errors)[0]}`;
  }
}
