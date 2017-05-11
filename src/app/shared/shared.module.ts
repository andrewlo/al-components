// Add shared components, directives, and pipes to this module.
// Do not add global services to this module, add to CoreModule instead.

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AlertComponent } from './alert';
import { BackdropComponent } from './backdrop';
import { BreadcrumbsComponent } from './breadcrumbs';
import { ButtonComponent } from './button';
import { CardComponent } from './card';
import { FloatingActionComponent } from './floating-action';
import { IconButtonComponent } from './icon-button';
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
import { ProgressBarComponent } from './progress-bar';
import { SectionComponent } from './section';
import { SideMenuComponent } from './side-menu';
import { SpinnerComponent } from './spinner';
import { ToggleComponent } from './toggle';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [
    AlertComponent,
    BackdropComponent,
    BreadcrumbsComponent,
    ButtonComponent,
    CardComponent,
    FloatingActionComponent,
    IconButtonComponent,
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
    ProgressBarComponent,
    SectionComponent,
    SideMenuComponent,
    SpinnerComponent,
    ToggleComponent,
  ],
  exports: [
    AlertComponent,
    BackdropComponent,
    BreadcrumbsComponent,
    ButtonComponent,
    CardComponent,
    FloatingActionComponent,
    IconButtonComponent,
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
    ProgressBarComponent,
    SectionComponent,
    SideMenuComponent,
    SpinnerComponent,
    ToggleComponent,
  ],
})
export class SharedModule {}
