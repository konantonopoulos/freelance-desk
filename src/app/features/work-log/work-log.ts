import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { entryEarningsCents } from '../../core/calculations';
import { FreelanceStore } from '../../core/freelance.store';
import { WorkEntry } from '../../core/models';

function localDate(): string {
  const d = new Date();
  const n = (value: number) => String(value).padStart(2, '0');
  return `${d.getFullYear()}-${n(d.getMonth() + 1)}-${n(d.getDate())}`;
}

@Component({
  selector: 'app-work-log', standalone: true,
  imports: [CurrencyPipe, DecimalPipe, FormsModule, RouterLink],
  templateUrl: './work-log.html', styleUrl: './work-log.css',
})
export class WorkLog {
  readonly store = inject(FreelanceStore);
  readonly today = localDate();
  showForm = false;
  error = '';
  draft = { projectId: '', date: this.today, hours: 1, note: '' };
  earnings(entry: WorkEntry): number { return entryEarningsCents(entry) / 100; }

  add(form: NgForm): void {
    if (form.invalid) return;
    try {
      this.store.createEntry(this.draft.projectId, this.draft.date, Number(this.draft.hours), this.draft.note);
      this.draft = { projectId: '', date: this.today, hours: 1, note: '' };
      form.resetForm(this.draft);
      this.error = '';
      this.showForm = false;
    } catch { this.error = 'Please choose an active project and enter valid work hours.'; }
  }
}
