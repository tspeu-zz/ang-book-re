import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  form: FormGroup;

  firstName = new FormControl('', Validators.required);

  constructor(fb: FormBuilder) {
    this.form = fb.group({
        firstName: this.firstName,
        password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmitModelBased() {
    console.log('LoginFormComponent form submitted');
    console.log(this.form);
  }

  fullUpdate() {
    this.form.setValue({firstName: 'Partial', password: 'monkey'});
  }

  partialUpdate() {
    this.form.patchValue({firstName: 'Partial'});
  }

  reset() {
    this.form.reset();
  }



}
