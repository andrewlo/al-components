import { Component, OnInit, OnDestroy } from '@angular/core';

import { NavigationService } from '../../core/navigation.service';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit, OnDestroy {
  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.navigationService.setTitle('Settings');
  }

  ngOnDestroy() {
    this.navigationService.setTitle(null);
  }
}
