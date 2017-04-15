import { Component, OnInit, OnDestroy } from '@angular/core';

import { ListItem } from '../types/list-item';
import { NavigationService } from '../core/navigation.service';

@Component({
  selector: 'al-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
})
export class ListPageComponent implements OnInit, OnDestroy {
  list: ListItem[] = [];
  id = 0;
  loading = false;

  constructor(private navigationService: NavigationService) {}

  ngOnInit() {
    this.navigationService.setTitle('List');
    this.list = this.createListItems(6);
  }

  ngOnDestroy() {
    this.navigationService.setTitle(null);
  }

  loadMore() {
    this.loading = true;
    setTimeout(
      () => {
        this.list.push(...this.createListItems(6));
        this.loading = false;
      },
      500);
  }

  private createListItem(): ListItem {
    return {
      id: this.id ++,
      title: `List item title ${this.id}`,
    };
  }

  private createListItems(num: number): ListItem[] {
    return new Array(num).fill(0).map(() => this.createListItem());
  }

}
