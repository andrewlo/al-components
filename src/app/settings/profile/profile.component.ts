import { Component, OnInit, OnDestroy } from '@angular/core';

import { Breadcrumb } from '../../types/breadcrumb';
import { NavigationService } from '../../core/navigation.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  crumbs: Breadcrumb[] = [{
    route: '/settings',
    label: 'Settings',
  }, {
    route: '/settings/profile',
    label: 'Profile',
  }];

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.navigationService.setTitle('Profile');
    this.navigationService.setBackRoute('/settings');
  }

  ngOnDestroy() {
    this.navigationService.setTitle(null);
    this.navigationService.setBackRoute(null);
  }
}
