import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'al-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
})
export class ToggleComponent {
  @Input() id: string;

  @Input() form: FormGroup;

  @Output() onChange = new EventEmitter<boolean>();
}
