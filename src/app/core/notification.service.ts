import { Injectable } from '@angular/core';

import { Notification } from '../types/notification';

@Injectable()
export class NotificationService {
  notifications: Notification[] = [];

  getNotifications(): Notification[] {
    return this.notifications;
  }

  addNotification(message: string): void {
    this.notifications.push({
      id: this.notifications.length,
      message,
    });
  }

  removeNotification(id: number): void {
    this.notifications = this.notifications.filter((notification: Notification) => notification.id !== id);
  }
}
