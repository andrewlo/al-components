import { Component } from '@angular/core';
import '../styles/index.css';

import { NotificationService } from './core/notification.service';
import { Notification } from './types/notification';

@Component({
  selector: 'al-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  sideMenuOpen = false;

  constructor(private notificationService: NotificationService) {}

  get notifications(): Notification[] {
    return this.notificationService.getNotifications();
  }
}
