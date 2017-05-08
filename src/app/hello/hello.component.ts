import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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

  toggleForm: FormGroup;
  checked = false;

  constructor(
    private notificationService: NotificationService,
    private formBuilder: FormBuilder) {
    this.toggleForm = this.formBuilder.group({
      toggle: [''],
    });
  }

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

  onToggle(checked: boolean) {
    this.checked = checked;
  }
}
