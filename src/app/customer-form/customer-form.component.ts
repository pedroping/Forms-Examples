import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  template: `
    <h3>Formulário do cliente</h3>
    <form [formGroup]="form">
      <app-person-form></app-person-form>
      <input placeholder="Cidade" formControlName="country" />
      <input placeholder="CPF" formControlName="cpf" />
    </form>
  `,
})
export class CustomerFormComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: '',
      lastName: '',
      birthDate: '',
      country: '',
      cpf: '',
    });
    console.log(Object.keys(this.form.controls))
  }
}
