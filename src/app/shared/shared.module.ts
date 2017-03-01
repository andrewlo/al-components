// Add shared components, directives, and pipes to this module.
// Do not add global services to this module, add to CoreModule instead.

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert';
import { BackdropComponent } from './backdrop';
import { ButtonComponent } from './button';
import { InputFormComponent } from './input-form';
import { MenuComponent } from './menu';
import { MenuItemComponent } from './menu-item';
import { ModalComponent } from './modal';
import { NavBarComponent } from './nav-bar';
import { PopOverComponent } from './pop-over';
import { SectionComponent } from './section';
import { SideMenuComponent } from './side-menu';
import { SpinnerComponent } from './spinner';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AlertComponent,
    BackdropComponent,
    ButtonComponent,
    InputFormComponent,
    MenuComponent,
    MenuItemComponent,
    ModalComponent,
    NavBarComponent,
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
    MenuComponent,
    MenuItemComponent,
    ModalComponent,
    NavBarComponent,
    PopOverComponent,
    SectionComponent,
    SideMenuComponent,
    SpinnerComponent,
  ],
})
export class SharedModule {}
