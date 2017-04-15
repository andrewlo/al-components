// Add shared components, directives, and pipes to this module.
// Do not add global services to this module, add to CoreModule instead.

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AlertComponent } from './alert';
import { BackdropComponent } from './backdrop';
import { ButtonComponent } from './button';
import { InputFormComponent } from './input-form';
import { LinkComponent } from './link';
import { ListComponent } from './list';
import { ListItemComponent } from './list-item';
import { LoadMoreComponent } from './load-more';
import { MenuComponent } from './menu';
import { MenuItemComponent } from './menu-item';
import { ModalComponent } from './modal';
import { NavBarComponent } from './nav-bar';
import { NotificationComponent } from './notification';
import { NotificationsComponent } from './notifications';
import { PopOverComponent } from './pop-over';
import { SectionComponent } from './section';
import { SideMenuComponent } from './side-menu';
import { SpinnerComponent } from './spinner';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [
    AlertComponent,
    BackdropComponent,
    ButtonComponent,
    InputFormComponent,
    LinkComponent,
    ListComponent,
    ListItemComponent,
    LoadMoreComponent,
    MenuComponent,
    MenuItemComponent,
    ModalComponent,
    NavBarComponent,
    NotificationComponent,
    NotificationsComponent,
    PopOverComponent,
    SectionComponent,
    SideMenuComponent,
    SpinnerComponent,
  ],
  exports: [
    AlertComponent,
    BackdropComponent,
    ButtonComponent,
    InputFormComponent,
    LinkComponent,
    ListComponent,
    ListItemComponent,
    LoadMoreComponent,
    MenuComponent,
    MenuItemComponent,
    ModalComponent,
    NavBarComponent,
    NotificationComponent,
    NotificationsComponent,
    PopOverComponent,
    SectionComponent,
    SideMenuComponent,
    SpinnerComponent,
  ],
})
export class SharedModule {}
