import { Component } from '@angular/core';

@Component({
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent {

  buttonLoading = false;

  onClick() {
    this.buttonLoading = true;
    setTimeout(() => this.buttonLoading = false, 1000);
  }
}
