import { Component } from '@angular/core';
import '../styles/index.css';

import { NotificationService } from './core/notification.service';
import { NavigationService } from './core/navigation.service';

import { Notification } from './types/notification';

@Component({
  selector: 'al-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  sideMenuOpen = false;

  constructor(
    private notificationService: NotificationService,
    private navigationService: NavigationService) {}

  get notifications(): Notification[] {
    return this.notificationService.getNotifications();
  }

  get title(): string {
    return this.navigationService.getTitle();
  }
}
