// Add shared components, directives, and pipes to this module.
// Do not add global services to this module, add to CoreModule instead.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button';
import { SectionComponent } from './section';
import { SpinnerComponent } from './spinner';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ButtonComponent,
    SectionComponent,
    SpinnerComponent,
  ],
  exports: [
    ButtonComponent,
    SectionComponent,
    SpinnerComponent,
  ],
})
export class SharedModule {}
