import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { AuthGuard } from './_guard/auth.guard'

const ROUTES: Routes = [
    { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' },
];

export const routing = RouterModule.forRoot(ROUTES);