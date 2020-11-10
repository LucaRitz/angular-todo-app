import { BrowserModule } from '@angular/platform-browser';
import {ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { EffectsModule } from '@ngrx/effects';
import {AppRoutingModule} from './app-routing-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {registerLocaleData} from '@angular/common';
import localeDeCh from '@angular/common/locales/de-CH';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

// AoT requires an exported function for factories
export function createHttpLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, '/todo-app/assets/i18n/');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createHttpLoader,
        deps: [HttpClient]
      },
      isolate: true
    }),
    StoreModule.forRoot([]),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'de-CH'}
  ],
  entryComponents: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule implements DoBootstrap {

  readonly browserLang: string;
  private readonly languages = ['de', 'fr', 'it'];
  constructor(private readonly translateService: TranslateService) {
    translateService.addLangs(this.languages);
    this.browserLang = translateService.getBrowserLang();
    registerLocaleData(localeDeCh);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    this.translateService.use(this.getUserLanguage()).toPromise()
      .then(() => {
        return appRef.bootstrap(AppComponent);
    }).catch((error) =>
      console.error('init failed', error)
    );
  }

  private getUserLanguage(): string {
    return this.languages.includes(this.browserLang) ? this.browserLang : 'de';
  }
}
