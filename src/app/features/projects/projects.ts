import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FreelanceStore } from '../../core/freelance.store';

@Component({
  selector: 'app-projects', standalone: true,
  imports: [CurrencyPipe, DecimalPipe, FormsModule, RouterLink],
  templateUrl: './projects.html', styleUrl: './projects.css',
})
export class Projects {
  readonly store = inject(FreelanceStore);
  showForm = false;
  error = '';
  draft = { name: '', hourlyRateEur: 35 };

  create(form: NgForm): void {
    if (form.invalid) return;
    try {
      this.store.createProject(this.draft.name, Number(this.draft.hourlyRateEur));
      this.draft = { name: '', hourlyRateEur: 35 };
      form.resetForm(this.draft);
      this.error = '';
      this.showForm = false;
    } catch {
      this.error = 'Please enter a name and a valid hourly rate.';
    }
  }
}
