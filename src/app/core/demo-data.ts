import { FreelanceData } from './models';

// Example work, not actual freelance records.
export const DEMO_DATA: FreelanceData = {
  version: 1,
  projects: [
    { id: 'demo-p1', name: 'Portfolio Website', hourlyRateEur: 35, status: 'active', createdAt: '2026-09-01T09:00:00Z' },
    { id: 'demo-p2', name: 'Sample API Integration', hourlyRateEur: 42, status: 'active', createdAt: '2026-09-03T09:00:00Z' },
    { id: 'demo-p3', name: 'Documentation Cleanup', hourlyRateEur: 28, status: 'archived', createdAt: '2026-08-01T09:00:00Z' },
  ],
  entries: [
    { id: 'demo-e1', projectId: 'demo-p1', date: '2026-10-07', durationMinutes: 180, note: 'Page layout and navigation', hourlyRateEur: 35, createdAt: '2026-10-07T10:00:00Z' },
    { id: 'demo-e2', projectId: 'demo-p2', date: '2026-10-09', durationMinutes: 135, note: 'Endpoint integration', hourlyRateEur: 42, createdAt: '2026-10-09T10:00:00Z' },
    { id: 'demo-e3', projectId: 'demo-p1', date: '2026-10-12', durationMinutes: 240, note: 'Responsive improvements', hourlyRateEur: 35, createdAt: '2026-10-12T10:00:00Z' },
    { id: 'demo-e4', projectId: 'demo-p3', date: '2026-09-16', durationMinutes: 120, note: 'Update project guide', hourlyRateEur: 28, createdAt: '2026-09-16T10:00:00Z' },
  ],
};
