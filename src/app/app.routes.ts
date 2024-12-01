import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return Promise.resolve(import('./pages/home/home.component')).then(
        (m) => m.HomeComponent
      );
    },
  },
  {
    path: 'auth/login',
    loadComponent: () => {
      return Promise.resolve(import('./pages/auth/login/login.component')).then(
        (m) => m.LoginComponent
      );
    },
  },
  {
    path: 'auth/create-account',
    loadComponent: () => {
      return Promise.resolve(
        import('./pages/auth/create-account/create-account.component')
      ).then((m) => m.CreateAccountComponent);
    },
  },
  {
    path: 'overview',
    loadComponent: () => {
      return Promise.resolve(
        import('./pages/overview/overview.component')
      ).then((m) => m.OverviewComponent);
    },
  },
];
