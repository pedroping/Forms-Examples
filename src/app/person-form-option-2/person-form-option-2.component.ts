import { Component } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-person-form-option-2',
  template: `
    <div>
      <input placeholder="Nome" formControlName="name" />
      <input placeholder="Sobrenome" formControlName="lastName" />
      <input placeholder="Data de nascimento" formControlName="birthDate" />
    </div>
  `,
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class PersonFormOption2Component {}
