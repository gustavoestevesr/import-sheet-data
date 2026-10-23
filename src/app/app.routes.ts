import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio').then((c) => c.Inicio),
  },
  {
    path: 'usuarios',
    loadComponent: () => import('./pages/usuarios/usuarios').then((c) => c.Usuarios),
  },
  {
    path: 'usuarios/new',
    loadComponent: () => import('./pages/usuarios/usuarios').then((c) => c.Usuarios),
  },
  {
    path: 'usuarios/:id',
    loadComponent: () => import('./pages/usuarios/usuarios').then((c) => c.Usuarios),
  },
  { path: '**', redirectTo: 'usuarios' },
];
