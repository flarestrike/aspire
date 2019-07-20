import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedMod as AppShared } from 'src/app/shared.mod';

import { CtLzmgMod } from '@chakray/tags';

import { DtPlacesTag } from './places/places.tag';
import { DtPeriodTag } from './period/period.tag';

import { DtInfoTag } from './info/info.tag';
import { DtStackTag } from './stack/stack.tag';
import { DtRoleTag } from './role/role.tag';
import { DtEduTag } from './edu/edu.tag';

const tags = [
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
  exports: [
    AppShared,
    ...tags],
})
export class DtTopicMod {}
