import { Route } from '@angular/router';

export const routes: Route[] = [
  { path: 'crisis-list', loadComponent: () => import('./crisis-list/crisis-list.component') },
  { path: 'heroes-list', loadComponent: () => import('./heroes-list/heroes-list.component') },
  { path: '', loadComponent: () => import('./home/home.component') },
];
