
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

interface RegistrationData {
  fullName: string;
  email: string;
  age: number | null;
  country: string;
}

@Component({
  selector: 'app-reactive-form',
  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],

  templateUrl: './reactive-form.html',
  styleUrls: ['./reactive-form.css']
})
export class ReactiveForm {

  // Déclaration du formulaire
  registrationForm: FormGroup;

  // Résultat après soumission
  submittedData: RegistrationData | null = null;

  constructor(private fb: FormBuilder) {

    this.registrationForm = this.fb.group({

      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      age: [
        null,
        [
          Validators.required,
          Validators.min(18)
        ]
      ],

      country: [
        '',
        [
          Validators.required
        ]
      ]

    });

  }


  // Accès aux contrôles du formulaire
  get fullName() {
    return this.registrationForm.get('fullName');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get age() {
    return this.registrationForm.get('age');
  }

  get country() {
    return this.registrationForm.get('country');
  }


  // Soumission du formulaire
  onSubmit(): void {

    if (this.registrationForm.invalid) {

      this.registrationForm.markAllAsTouched();

      return;
    }

    this.submittedData =
      this.registrationForm.getRawValue() as RegistrationData;

    console.log('Inscription réussie :', this.submittedData);

  }

}
