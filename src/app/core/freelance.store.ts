import { Injectable, computed, signal } from '@angular/core';
import { hoursToMinutes, totalEarningsCents, totalMinutes } from './calculations';
import { DEMO_DATA } from './demo-data';
import { FreelanceData, FreelanceProject, WorkEntry } from './models';

const STORAGE_KEY = 'freelance-desk-data-v1';
const EMPTY_DATA: FreelanceData = { version: 1, projects: [], entries: [] };

function isData(value: unknown): value is FreelanceData {
  if (!value || typeof value !== 'object') return false;
  const data = value as Partial<FreelanceData>;
  return data.version === 1 && Array.isArray(data.projects) && Array.isArray(data.entries)
    && data.projects.every((project: FreelanceProject) =>
      typeof project.id === 'string' && typeof project.name === 'string'
      && (project.status === 'active' || project.status === 'archived')
      && Number.isFinite(project.hourlyRateEur) && project.hourlyRateEur >= 0)
    && data.entries.every((entry: WorkEntry) =>
      typeof entry.id === 'string' && typeof entry.projectId === 'string'
      && typeof entry.date === 'string' && typeof entry.note === 'string'
      && Number.isFinite(entry.durationMinutes) && entry.durationMinutes > 0
      && Number.isFinite(entry.hourlyRateEur) && entry.hourlyRateEur >= 0);
}

function restore(): FreelanceData {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    if (!value) return EMPTY_DATA;
    const parsed: unknown = JSON.parse(value);
    return isData(parsed) ? parsed : EMPTY_DATA;
  } catch { return EMPTY_DATA; }
}

@Injectable({ providedIn: 'root' })
export class FreelanceStore {
  private readonly data = signal<FreelanceData>(restore());
  readonly storageError = signal(false);

  readonly projects = computed(() => this.data().projects);
  readonly activeProjects = computed(() => this.projects().filter(p => p.status === 'active'));
  readonly entries = computed(() => [...this.data().entries].sort((a, b) => b.date.localeCompare(a.date) || b.createdAt.localeCompare(a.createdAt)));
  readonly projectCount = computed(() => this.activeProjects().length);
  readonly minutes = computed(() => totalMinutes(this.entries()));
  readonly earningsCents = computed(() => totalEarningsCents(this.entries()));
  readonly hasData = computed(() => this.projects().length > 0 || this.entries().length > 0);

  createProject(name: string, hourlyRateEur: number): void {
    const cleanName = name.trim();
    if (!cleanName || cleanName.length > 70 || !Number.isFinite(hourlyRateEur) || hourlyRateEur < 0 || hourlyRateEur > 100000) {
      throw new Error('Invalid project details.');
    }
    const project: FreelanceProject = {
      id: crypto.randomUUID(), name: cleanName, hourlyRateEur,
      status: 'active', createdAt: new Date().toISOString(),
    };
    this.save({ ...this.data(), projects: [...this.projects(), project] });
  }

  toggleProjectStatus(id: string): void {
    this.save({ ...this.data(), projects: this.projects().map(project =>
      project.id === id ? { ...project, status: project.status === 'active' ? 'archived' : 'active' } : project
    ) });
  }

  createEntry(projectId: string, date: string, hours: number, note: string): void {
    const project = this.activeProjects().find(p => p.id === projectId);
    if (!project || !/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(hours)) {
      throw new Error('Invalid work entry.');
    }
    const entry: WorkEntry = {
      id: crypto.randomUUID(), projectId, date, durationMinutes: hoursToMinutes(hours),
      note: note.trim().slice(0, 300), hourlyRateEur: project.hourlyRateEur,
      createdAt: new Date().toISOString(),
    };
    this.save({ ...this.data(), entries: [...this.data().entries, entry] });
  }

  loadDemo(): void {
    if (this.hasData()) return;
    this.save(structuredClone(DEMO_DATA));
  }

  projectName(id: string): string {
    return this.projects().find(p => p.id === id)?.name ?? 'Unknown project';
  }

  private save(next: FreelanceData): void {
    this.data.set(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      this.storageError.set(false);
    } catch {
      this.storageError.set(true);
    }
  }
}
