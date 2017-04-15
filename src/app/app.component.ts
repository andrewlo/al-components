import { Component } from '@angular/core';
import '../styles/index.css';

import { NotificationService } from './core/notification.service';
import { NavigationService } from './core/navigation.service';

import { Notification } from './types/notification';
import { SideMenuItems } from './types/side-menu-items';

@Component({
  selector: 'al-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sideMenuOpen = false;

  sideMenuItems: SideMenuItems[] = [{
    route: '',
    label: 'Home',
    icon: 'fa-home',
  }, {
    route: 'login',
    label: 'Login',
    icon: 'fa-sign-in',
  }, {
    route: 'list',
    label: 'List',
    icon: 'fa-list',
  }, {
    route: 'settings',
    label: 'Settings',
    icon: 'fa-cog',
  }];

  constructor(
    private notificationService: NotificationService,
    private navigationService: NavigationService) {}

  get notifications(): Notification[] {
    return this.notificationService.getNotifications();
  }

  get title(): string {
    return this.navigationService.getTitle();
  }

  get backRoute(): string {
    return this.navigationService.getBackRoute();
  }
}
