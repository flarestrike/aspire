import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CtIconMod as IconMod } from '@chakray/tags';

import { NavTag } from './nav.tag';

@NgModule({
  imports: [
    IconMod,
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavTag
  ],
  exports: [
    RouterModule,
    NavTag
  ]
})
export class NavMod {}
