import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from './pages.component';





export const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children:[
            { path:'', redirectTo:'pages', pathMatch:'full' },

       ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
