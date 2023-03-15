import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-person-form',
  template: `
    <div [formGroup]="form">
      <input placeholder="Nome" formControlName="name" />
      <input placeholder="Sobrenome" formControlName="lastName" />
      <input placeholder="Data de nascimento" formControlName="birthDate" />
    </div>
  `,
})
export class PersonFormComponent implements OnInit {
  form: FormGroup;
  constructor(private controlContainer: ControlContainer) {}

  ngOnInit() {
    this.form = this.controlContainer.control as FormGroup;
  }
}
