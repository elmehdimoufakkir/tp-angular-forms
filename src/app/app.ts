
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { TemplateForm } from './template-form/template-form';
import { ReactiveForm } from './reactive-form/reactive-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatTabsModule,
    TemplateForm,
    ReactiveForm
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'tp-angular-forms';
}
