
import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {
  title: string;
  defaultTitle = 'Demo app';

  getTitle(): string {
    return this.title || this.defaultTitle;
  }

  setTitle(title: string): void {
    this.title = title;
  }
}
