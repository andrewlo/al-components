import { Component, Input } from '@angular/core';

@Component({
  selector: 'al-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent {
  @Input() size = '40px';
}
