import { Component, OnInit, OnDestroy } from '@angular/core';

import { NavigationService } from '../../core/navigation.service';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit, OnDestroy {
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
