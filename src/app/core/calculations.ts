import { WorkEntry } from './models';

export function hoursToMinutes(hours: number): number {
  if (!Number.isFinite(hours) || hours <= 0 || hours > 24) {
    throw new RangeError('Hours must be between 0 and 24.');
  }
  const minutes = Math.round(hours * 60);
  if (minutes < 1) throw new RangeError('Hours must be at least one minute.');
  return minutes;
}

// Round per entry so the displayed amounts add up to the total.
export function entryEarningsCents(entry: Pick<WorkEntry, 'durationMinutes' | 'hourlyRateEur'>): number {
  return Math.round(entry.durationMinutes * entry.hourlyRateEur * 100 / 60);
}

export function totalEarningsCents(entries: ReadonlyArray<WorkEntry>): number {
  return entries.reduce((sum, entry) => sum + entryEarningsCents(entry), 0);
}

export function totalMinutes(entries: ReadonlyArray<WorkEntry>): number {
  return entries.reduce((sum, entry) => sum + entry.durationMinutes, 0);
}
