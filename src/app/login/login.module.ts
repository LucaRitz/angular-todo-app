import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoginContainer} from './login.container';
import {LoginRoutingModule} from './login-routing-module';
import {StoreModule} from '@ngrx/store';
import * as fromLogin from './login.reducer';
import {LoginEffects} from './login.effects';
import { EffectsModule } from '@ngrx/effects';
import {MatCardModule} from '@angular/material/card';
import {TranslateModule} from '@ngx-translate/core';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    LoginContainer
  ],
  imports: [
    LoginRoutingModule,
    StoreModule.forFeature(fromLogin.loginFeatureKey, fromLogin.reducer),
    EffectsModule.forFeature([LoginEffects]),
    MatCardModule,
    TranslateModule,
    CommonModule,
    MatInputModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModule { }
