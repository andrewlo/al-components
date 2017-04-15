import { Component, OnInit, OnDestroy } from '@angular/core';

import { Breadcrumb } from '../../types/breadcrumb';
import { NavigationService } from '../../core/navigation.service';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit, OnDestroy {
  crumbs: Breadcrumb[] = [{
    route: '/settings',
    label: 'Settings',
  }, {
    route: '/settings/about',
    label: 'About',
  }];

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.navigationService.setTitle('About');
    this.navigationService.setBackRoute('/settings');
  }

  ngOnDestroy() {
    this.navigationService.setTitle(null);
    this.navigationService.setBackRoute(null);
  }
}
