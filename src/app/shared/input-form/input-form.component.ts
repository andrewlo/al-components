import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'al-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent {
  @Input() label: string;

  @Input() id: string;

  @Input() placeholder: string;

  @Input() disabled = false;

  @Input() type = 'text';

  @Input() form: FormGroup;
}
