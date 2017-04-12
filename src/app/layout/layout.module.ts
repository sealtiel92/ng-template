import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { LayoutRouting } from "./layout.routing";

import { LayoutComponent } from "./layout.component";
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './header/search/search.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationTriggerComponent } from './header/navigation-trigger/navigation-trigger.component';

// components
import { HomeComponent } from '../pages/home/home.component'
import { ProfileComponent } from '../pages/profile/profile.component'

@NgModule ({
    declarations: [
        HomeComponent,
        ProfileComponent,
        LayoutComponent,
        HeaderComponent,
        SearchComponent,
        NavigationComponent,
        NavigationTriggerComponent
    ],
    imports: [
        CommonModule,
        LayoutRouting,
        FormsModule
    ]
})

export class LayoutModule {  }