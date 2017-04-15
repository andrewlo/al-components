import { Component, OnInit, OnDestroy } from '@angular/core';

import { NavigationService } from '../../core/navigation.service';

@Component({
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css'],
})
export class VersionComponent implements OnInit, OnDestroy {
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
