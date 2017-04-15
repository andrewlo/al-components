import { Component, OnInit, OnDestroy } from '@angular/core';

import { Breadcrumb } from '../../types/breadcrumb';
import { NavigationService } from '../../core/navigation.service';

@Component({
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css'],
})
export class VersionComponent implements OnInit, OnDestroy {
  crumbs: Breadcrumb[] = [{
    route: '/settings',
    label: 'Settings',
  }, {
    route: '/settings/about',
    label: 'About',
  }, {
    route: '/settings/version',
    label: 'Version',
  }];

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.navigationService.setTitle('Version');
    this.navigationService.setBackRoute('/settings/about');
  }

  ngOnDestroy() {
    this.navigationService.setTitle(null);
    this.navigationService.setBackRoute(null);
  }
}
