import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from '../pages/home/home.component'
import { ProfileComponent } from '../pages/profile/profile.component'

const LAYOUT_ROUTES: Routes = [
    { path: '', component: LayoutComponent, children: [
        //Home
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'profile', component: ProfileComponent },
    ]}
];

export const LayoutRouting = RouterModule.forChild(LAYOUT_ROUTES);