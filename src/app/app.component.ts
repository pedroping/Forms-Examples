import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  keys: string[] = []
  ngOnInit() {
    this.form = this.formBuilder.group({
      name: '',
      lastName: '',
      birthDate: '',
      rg: '',
    });

    this.keys = Object.keys(this.form.controls)

  }
}
