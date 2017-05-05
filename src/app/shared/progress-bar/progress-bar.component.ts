import { Component, Input } from '@angular/core';

@Component({
  selector: 'al-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent {
  @Input() value = 0;
  @Input() bgColorClass = 'bg-silver';
}
