import { Component, Input } from '@angular/core';

@Component({
  selector: 'al-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent {
  @Input() src: string;

  notFound = false;
  loaded = false;

  onLoaded() {
    this.loaded = true;
  }

  onError() {
    this.loaded = true;
    this.notFound = true;
  }
}
