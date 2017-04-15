import { Component, Input } from '@angular/core';

import { Breadcrumb } from '../../types/breadcrumb';

@Component({
  selector: 'al-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
})
export class BreadcrumbsComponent {
  @Input() breadcrumbs: Breadcrumb[];
}
