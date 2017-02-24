import { Component, Input } from '@angular/core';

@Component({
  selector: 'al-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent {
  @Input() heading: string;
}
