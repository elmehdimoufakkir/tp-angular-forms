
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, NgForm } from '@angular/forms';

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
  selector: 'app-template-form',
  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],

  templateUrl: './template-form.html',
  styleUrls: ['./template-form.css']
})
export class TemplateForm {

  // Données du formulaire
  registration: RegistrationData = {
    fullName: '',
    email: '',
    age: null,
    country: ''
  };

  // Contient les données après validation
  submittedData: RegistrationData | null = null;

  // Méthode appelée lors de la soumission
  onSubmit(form: NgForm): void {

    if (form.invalid) {
      return;
    }

    this.submittedData = { ...this.registration };

    console.log('Inscription réussie :', this.submittedData);
  }
}
