import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ListPageRoutingModule } from './list-page-routing.module';

import { ListPageComponent } from './list-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ListPageRoutingModule,
  ],
  declarations: [
    ListPageComponent,
  ],
})
export class ListPageModule { }
