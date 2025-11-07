import { Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { HomePage } from './home/home.page';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  { path: 'home', component: HomePage },
  {
    path: 'departamentos',
    loadComponent: () => import('./departamentos/departamentos.page').then( m => m.DepartamentosPage)
  },
  {
    path: 'trabajadores',
    loadComponent: () => import('./trabajadores/trabajadores.page').then( m => m.TrabajadoresPage)
  },
  {
    path: 'mantenimientos',
    loadComponent: () => import('./mantenimientos/mantenimientos.page').then( m => m.MantenimientosPage)
  },
];
