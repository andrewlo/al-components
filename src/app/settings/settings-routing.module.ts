import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';

import { AboutComponent } from './about/about.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ProfileComponent } from './profile/profile.component';
import { VersionComponent } from './version/version.component';

const routes: Routes = [
  { path: 'settings', component: MainComponent },
  { path: 'settings/about', component: AboutComponent },
  { path: 'settings/personal-info', component: PersonalInfoComponent },
  { path: 'settings/profile', component: ProfileComponent },
  { path: 'settings/version', component: VersionComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  providers: [],
  exports: [
    RouterModule,
  ],
})
export class SettingsRoutingModule { }
