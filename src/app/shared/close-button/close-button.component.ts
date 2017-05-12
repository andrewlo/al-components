import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'al-close-button',
  templateUrl: './close-button.component.html',
  styleUrls: ['./close-button.component.css'],
})
export class CloseButtonComponent {

  @Output() onClick = new EventEmitter();

}
