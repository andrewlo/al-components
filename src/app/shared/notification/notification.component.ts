import { Component, Input, OnInit } from '@angular/core';

import { Notification } from '../../types/notification';
import { NotificationService } from '../../core/notification.service';

const fadeTimeMs = 5000;

@Component({
  selector: 'al-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {
  @Input() notification: Notification;

  show = false;

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    // Needed for slide-in animation, component renders off screen initially
    setTimeout(() => this.show = true, 100);

    // Fade out timer
    setTimeout(() => this.close(), fadeTimeMs);
  }

  close() {
    this.show = false;

    // Remove after fade out animation
    setTimeout(() => this.notificationService.removeNotification(this.notification.id), 500);
  }
}
