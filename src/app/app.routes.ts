import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Projects } from './features/projects/projects';
import { WorkLog } from './features/work-log/work-log';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'overview' },
  { path: 'overview', component: Dashboard, title: 'Overview | FreelanceDesk' },
  { path: 'projects', component: Projects, title: 'Projects | FreelanceDesk' },
  { path: 'work-log', component: WorkLog, title: 'Work log | FreelanceDesk' },
  { path: '**', redirectTo: 'overview' },
];
