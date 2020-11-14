import {NgModule} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {CommonModule} from '@angular/common';
import {AppBackButtonDirective} from './app-back-button.directive';

@NgModule({
  declarations: [
    AppBackButtonDirective
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [
    AppBackButtonDirective
  ]
})
export class SharedModule { }
