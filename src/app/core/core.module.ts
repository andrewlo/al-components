// Add global services to this module.

import { NgModule } from '@angular/core';

import { NotificationService } from './notification.service';
import { NavigationService } from './navigation.service';

@NgModule({
  imports: [],
  providers: [
    NotificationService,
    NavigationService,
  ],
})
export class CoreModule { }
