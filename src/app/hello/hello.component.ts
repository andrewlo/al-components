import { Component } from '@angular/core';

@Component({
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent {

  buttonLoading = false;
  popOverOpen = false;
  popOverBackdropOpen = false;
  modalOpen = false;

  onClick() {
    this.buttonLoading = true;
    setTimeout(() => this.buttonLoading = false, 1000);
  }

  openPopOver() {
    this.popOverOpen = true;
  }
}
