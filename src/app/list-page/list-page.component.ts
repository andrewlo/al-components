import { Component, OnInit } from '@angular/core';

import { ListItem } from '../types/list-item';

@Component({
  selector: 'al-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
})
export class ListPageComponent implements OnInit {
  list: ListItem[] = [];
  id = 0;
  loading = false;

  ngOnInit() {
    this.list = this.createListItems(6);
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
