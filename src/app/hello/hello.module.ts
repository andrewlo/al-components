import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HelloRoutingModule } from './hello-routing.module';

import { HelloComponent } from './hello.component';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    CommonModule,
    HelloRoutingModule,
  ],
  declarations: [
    HelloComponent,
  ],
})
export class HelloModule { }
