import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { entryEarningsCents } from '../../core/calculations';
import { FreelanceStore } from '../../core/freelance.store';
import { WorkEntry } from '../../core/models';

@Component({
  selector: 'app-dashboard', standalone: true,
  imports: [CurrencyPipe, DecimalPipe, RouterLink],
  templateUrl: './dashboard.html', styleUrl: './dashboard.css',
})
export class Dashboard {
  readonly store = inject(FreelanceStore);
  readonly recentEntries = () => this.store.entries().slice(0, 5);
  readonly earnings = (entry: WorkEntry) => entryEarningsCents(entry) / 100;
}
