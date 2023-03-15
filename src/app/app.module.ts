import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { ProviderFormComponent } from './provider-form/provider-form.component';
import { EnableOnCheckDirective } from './enable-on-check.directive';
import { PersonFormOption2Component } from './person-form-option-2/person-form-option-2.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    PersonFormComponent,
    PersonFormOption2Component,
    CustomerFormComponent,
    ProviderFormComponent,
    EnableOnCheckDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
