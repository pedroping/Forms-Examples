import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-provider-form',
  template: `
    <h3>Formulário do fornecedor</h3>
    <form [formGroup]="form">
      <app-person-form-option-2></app-person-form-option-2>
      <input placeholder="RG" formControlName="rg" />
      <div style="display: flex">
      <input style="width: 20px" type="checkbox" formControlName="hasCnh" />
      <label>Possui CNH?</label>
    </div>
      <input placeholder="CNH" formControlName="cnh" appEnableOnCheck="hasCnh" />
      <pre>VALID: {{ form.valid }}</pre>
    </form>
  `,
})
export class ProviderFormComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: '',
      lastName: '',
      birthDate: '',
      rg: '',
      hasCnh: false,
      cnh: new FormControl({ value: '', disabled: true }, Validators.required),
    });
  }
}
