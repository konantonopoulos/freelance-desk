import { describe, expect, it } from 'vitest';
import { entryEarningsCents, hoursToMinutes, totalEarningsCents, totalMinutes } from './calculations';

const exampleEntry = { durationMinutes: 90, hourlyRateEur: 32 };

describe('freelance work calculations', () => {
  it('converts decimal hours into whole minutes', () => {
    expect(hoursToMinutes(1.5)).toBe(90);
    expect(hoursToMinutes(0.25)).toBe(15);
  });

  it('rejects invalid time durations', () => {
    expect(() => hoursToMinutes(-2)).toThrow(RangeError);
    expect(() => hoursToMinutes(30)).toThrow(RangeError);
  });

  it('calculates gross earnings in cents', () => {
    expect(entryEarningsCents(exampleEntry)).toBe(4800);
  });

  it('sums multiple entries without changing their original rates', () => {
    const entries = [
      { ...exampleEntry, id: 'a', projectId: 'p', date: '2026-01-05', note: '', createdAt: '', hourlyRateEur: 32 },
      { ...exampleEntry, id: 'b', projectId: 'p', date: '2026-01-06', note: '', createdAt: '', hourlyRateEur: 40 },
    ];
    expect(totalEarningsCents(entries)).toBe(10800);
    expect(totalMinutes(entries)).toBe(180);
  });
});
