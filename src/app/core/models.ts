export interface FreelanceProject {
  id: string;
  name: string;
  hourlyRateEur: number;
  status: 'active' | 'archived';
  createdAt: string;
}

export interface WorkEntry {
  id: string;
  projectId: string;
  date: string; // yyyy-mm-dd, local calendar day
  durationMinutes: number;
  note: string;
  // Keep the rate used when this work was logged.
  hourlyRateEur: number;
  createdAt: string;
}

export interface FreelanceData {
  version: 1;
  projects: FreelanceProject[];
  entries: WorkEntry[];
}
