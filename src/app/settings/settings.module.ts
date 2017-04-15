import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SettingsRoutingModule } from './settings-routing.module';

import { MainComponent } from './main/main.component';

import { AboutComponent } from './about/about.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ProfileComponent } from './profile/profile.component';
import { VersionComponent } from './version/version.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SettingsRoutingModule,
  ],
  declarations: [
    MainComponent,
    AboutComponent,
    PersonalInfoComponent,
    ProfileComponent,
    VersionComponent,
  ],
})
export class SettingsModule { }
