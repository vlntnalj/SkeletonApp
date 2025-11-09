import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage),
  },
  {
    path: 'registro',
    loadComponent: () => import('./register/register.page').then(m => m.RegisterPage),
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then(m => m.TabsPage),
    children: [
      {
        path: 'inicio',
        loadComponent: () => import('./home/home.page').then(m => m.HomePage),
      },
      {
        path: 'departamentos',
        loadComponent: () => import('./departamentos/departamentos.page').then(m => m.DepartamentosPage),
      },
      {
        path: 'mantencion',
        loadComponent: () => import('./mantenimientos/mantenimientos.page').then(m => m.MantenimientosPage),
      },
      {
        path: 'pagos',
        loadComponent: () => import('./pagos/pagos.page').then(m => m.PagosPage),
      },
      {
        path: 'trabajadores',
        loadComponent: () => import('./trabajadores/trabajadores.page').then(m => m.TrabajadoresPage),
      },
      {
        path: '',
        redirectTo: '/tabs/inicio',
        pathMatch: 'full'
      }
    ],
  }
];
