import { Component, OnInit, OnDestroy } from '@angular/core';

import { Breadcrumb } from '../../types/breadcrumb';
import { NavigationService } from '../../core/navigation.service';

@Component({
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit, OnDestroy {
  crumbs: Breadcrumb[] = [{
    route: '/settings',
    label: 'Settings',
  }, {
    route: '/settings/profile',
    label: 'Profile',
  }, {
    route: '/settings/personal-info',
    label: 'Personal Info',
  }];

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.navigationService.setTitle('Personal Info');
    this.navigationService.setBackRoute('/settings/profile');
  }

  ngOnDestroy() {
    this.navigationService.setTitle(null);
    this.navigationService.setBackRoute(null);
  }
}
