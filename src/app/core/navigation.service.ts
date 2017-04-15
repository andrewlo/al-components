
import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {
  title: string;
  defaultTitle = 'Demo app';
  backRoute: string;

  getTitle(): string {
    return this.title || this.defaultTitle;
  }

  setTitle(title: string): void {
    this.title = title;
  }

  getBackRoute(): string {
    return this.backRoute;
  }

  setBackRoute(route: string): void {
    this.backRoute = route;
  }
}
