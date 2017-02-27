// Add shared components, directives, and pipes to this module.
// Do not add global services to this module, add to CoreModule instead.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackdropComponent } from './backdrop';
import { ButtonComponent } from './button';
import { MenuComponent } from './menu';
import { MenuItemComponent } from './menu-item';
import { ModalComponent } from './modal';
import { PopOverComponent } from './pop-over';
import { SectionComponent } from './section';
import { SpinnerComponent } from './spinner';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    BackdropComponent,
    ButtonComponent,
    MenuComponent,
    MenuItemComponent,
    ModalComponent,
    PopOverComponent,
    SectionComponent,
    SpinnerComponent,
  ],
  exports: [
    BackdropComponent,
    ButtonComponent,
    MenuComponent,
    MenuItemComponent,
    ModalComponent,
    PopOverComponent,
    SectionComponent,
    SpinnerComponent,
  ],
})
export class SharedModule {}
