import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  form: FormGroup;
  nombreValido: AbstractControl;
  telefonoValido: AbstractControl;
  emailValido: AbstractControl;

  // firstName = new FormControl('', Validators.required)
  constructor(fb: FormBuilder) {
    this.initForm(fb);

  }

  initForm(fb: FormBuilder) {

    this.form = fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      telefono: ['', [ Validators.required, Validators.minLength(9), this.forbiddenNameValidator(/[0-9]/)]],
      email: ['', [Validators.required, Validators.email]]
    });

    // tslint:disable-next-line: no-string-literal
    this.nombreValido = this.form.controls['nombre'];
    // tslint:disable-next-line: no-string-literal
    this.telefonoValido = this.form.controls['telefono'];
    // tslint:disable-next-line: no-string-literal
    this.emailValido = this.form.controls['email'];


  }

  forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {forbiddenName: {value: control.value}} : null;
    };
  }


  ngOnInit() {
    console.log('---FORM COMPONENT LOGIN ');
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
