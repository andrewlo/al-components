import { Component, Input } from '@angular/core';

import { Notification } from '../../types/notification';

@Component({
  selector: 'al-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent {
  @Input() notifications: Notification[];
}
