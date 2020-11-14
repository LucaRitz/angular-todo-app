import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Todo} from './todo';

export class TodoForm {

  group: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl('', Validators.required),
    dueDate: new FormControl('')
  });

  patchValue(value): void {
    if (value) {
      this.group.patchValue(value);
    } else {
      this.group.reset();
    }
  }

  get value(): Todo {
    return this.group.value;
  }

  get valid(): boolean {
    return this.group.valid;
  }

  get title(): FormControl {
    return this.group.get('title') as FormControl;
  }

  get dueDate(): FormControl {
    return this.group.get('dueDate') as FormControl;
  }
}