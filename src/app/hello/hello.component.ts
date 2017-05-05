import { Component } from '@angular/core';

import { NotificationService } from '../core/notification.service';

@Component({
  selector: 'al-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent {

  buttonLoading = false;
  popOverOpen = false;
  popOverBackdropOpen = false;
  modalOpen = false;

  notificationNumber = 1;

  loadingMore = false;

  progress = 40;

  constructor(private notificationService: NotificationService) {}

  onButtonClick() {
    this.buttonLoading = true;
    setTimeout(() => this.buttonLoading = false, 1000);
  }

  openPopOver() {
    this.popOverOpen = true;
  }

  showNotification() {
    this.notificationService.addNotification(`New notification ${this.notificationNumber}`);
    this.notificationNumber++;
  }

  loadMore() {
    this.loadingMore = true;
    setTimeout(() => this.loadingMore = false, 1000);
  }

  onProgressBarButtonClick() {
    this.progress = this.progress + 20;
    if (this.progress > 100) {
      this.progress = 0;
    }
  }
}
