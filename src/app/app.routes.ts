import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const router: Routes = [
    { path: '', redirectTo: 'menu', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent },
    { path: 'menu', component: MenuComponent },
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);