import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavTag } from './nav.tag';

@NgModule({
  imports: [
    CommonModule,
    RouterModule],
  declarations: [
    NavTag
  ],
  exports: [
    RouterModule,
    NavTag
  ]
})
export class NavMod {}
