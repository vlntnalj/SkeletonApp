import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';   // ✅ IMPORT CORRECTO

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // 🔓 Rutas públicas
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage),
  },
  {
    path: 'registro',
    loadComponent: () => import('./register/register.page').then(m => m.RegisterPage),
  },

  // 🔐 Rutas protegidas
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then(m => m.TabsPage),
    canActivate: [authGuard],   // 👈 PROTEGE TODA LA SECCIÓN TABS
    children: [
      {
        path: 'inicio',
        loadComponent: () => import('./home/home.page').then(m => m.HomePage),
        canActivate: [authGuard]
      },
      {
        path: 'departamentos',
        loadComponent: () => import('./departamentos/departamentos.page').then(m => m.DepartamentosPage),
        canActivate: [authGuard]
      },
      {
        path: 'mantencion',
        loadComponent: () => import('./mantenimientos/mantenimientos.page').then(m => m.MantenimientosPage),
        canActivate: [authGuard]
      },
      {
        path: 'pagos',
        loadComponent: () => import('./pagos/pagos.page').then(m => m.PagosPage),
        canActivate: [authGuard]   // 👍 ya lo tenías, se mantiene
      },
      {
        path: 'trabajadores',
        loadComponent: () => import('./trabajadores/trabajadores.page').then(m => m.TrabajadoresPage),
        canActivate: [authGuard]
      },
      {
        path: '',
        redirectTo: '/tabs/inicio',
        pathMatch: 'full'
      }
    ],
  }
];
