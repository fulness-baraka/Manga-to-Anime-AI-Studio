import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './landing-page/landing-page';
import { routes as landingPageRoute } from './landing-page/landing-page-routing';
import './dashboard/dashboard';
import { routes as dashboardRoute } from './dashboard/dashboard-routing';
import './new-project/new-project';
import './project-editor/project-editor';
import './export/export';

export const routes: Route[] = [
  { path: 'export', component: 'app-export', name: 'Export' },
  { path: 'project-editor', component: 'app-project-editor', name: 'ProjectEditor' },
  { path: 'new-project', component: 'app-new-project', name: 'NewProject' },
  { path: 'dashboard', component: 'app-dashboard', name: 'Dashboard', children: dashboardRoute },
  { path: 'landing-page', component: 'app-landing-page', name: 'LandingPage', children: landingPageRoute },
  { path: '', redirect: 'landing-page/landing-page-content' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
