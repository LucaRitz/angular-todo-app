import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginForm {

  form: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.maxLength(50)]],
      password: [null, [Validators.required, Validators.maxLength(50)]],
    });
  }

  reset(): void {
    this.form.reset();
  }

  patchValue(value: User): void {
    this.form.patchValue(value);
  }

  value(): User {
    return this.form.value;
  }

  isInvalid(): boolean {
    return this.form.invalid;
  }
}
