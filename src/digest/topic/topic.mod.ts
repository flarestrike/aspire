import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DtPlacesTag } from './places/places.tag';
import { DtPeriodTag } from './period/period.tag';

import { DtStackTag } from './stack/stack.tag';
import { DtRoleTag } from './role/role.tag';
import { DtEduTag } from './edu/edu.tag';

const tags = [
  DtPlacesTag,
  DtPeriodTag,
  DtStackTag,
  DtRoleTag,
  DtEduTag,
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...tags],
  exports: [...tags],
})
export class DtTopicMod {}
