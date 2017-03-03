// Add global services to this module.

import { NgModule } from '@angular/core';

import { NotificationService } from './notification.service';

@NgModule({
  imports: [],
  providers: [
    NotificationService,
  ],
})
export class CoreModule { }
