import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Label as CardLabel } from 'src/cards/label';
import { Label } from 'src/digest/label';
import { SharedMod as AppShared } from 'src/app/shared.mod';

import { CtLzmgMod } from '@chakray/tags';

import { DtPlacesTag } from './places/places.tag';
import { DtPeriodTag } from './period/period.tag';

import { DtNavTag } from './nav/nav.tag';
import { DtInfoTag } from './info/info.tag';
import { DtStackTag } from './stack/stack.tag';
import { DtRoleTag } from './role/role.tag';
import { DtEduTag } from './edu/edu.tag';

const tags = [
  DtNavTag,
  DtInfoTag,
  DtPlacesTag,
  DtPeriodTag,
  DtStackTag,
  DtRoleTag,
  DtEduTag,
];

@NgModule({
  imports: [
    AppShared,
    CtLzmgMod,
    CommonModule
  ],
  declarations: [...tags],
  providers: [Label, CardLabel],
  exports: [
    AppShared,
    ...tags],
})
export class DtTopicMod {}
