import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGaurdService } from './Services/AuthGaurd.service';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule',canActivate:[AuthGaurdService] },
  { path: 'login', loadChildren: '../app/pages/login/login.module#LoginModule' },
  { path: 'logout', loadChildren: '../app/pages/logout/logout.module#LogoutModule',canActivate:[AuthGaurdService] },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
});
