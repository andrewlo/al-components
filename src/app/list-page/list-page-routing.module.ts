import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPageComponent } from './list-page.component';

const routes: Routes = [
  { path: 'list', component: ListPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  providers: [],
  exports: [
    RouterModule,
  ],
})
export class ListPageRoutingModule { }
