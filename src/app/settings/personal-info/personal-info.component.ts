import { Component, OnInit, OnDestroy } from '@angular/core';

import { NavigationService } from '../../core/navigation.service';

@Component({
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit, OnDestroy {
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
