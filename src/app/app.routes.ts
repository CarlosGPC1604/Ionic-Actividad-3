import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'ejercicio2',
    loadComponent: () => import('./ejercicios/ejercicio2/ejercicio2.page').then(m => m.Ejercicio2Page)
  },
  {
    path: 'ejercicio1',
    loadComponent: () => import('./ejercicios/ejercicio1/ejercicio1.page').then(m => m.Ejercicio1Page)
  },
  {
    path: 'ejercicio3',
    loadComponent: () => import('./ejercicios/ejercicio3/ejercicio3.page').then(m => m.Ejercicio3Page)
  },
];