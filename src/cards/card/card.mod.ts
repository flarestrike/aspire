import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CtLzmgMod, CtIconMod as IconMod } from '@chakray/tags';

import { cards } from './all';
import { CardTag } from './card.tag';

import { CsTitleTag } from './title/title.tag';
import { CsItemTag } from './item/item.tag';
import { CsPlaceTag } from './place/place.tag';
import { CsPeriodTag } from './period/period.tag';

const utils = [
  CsPeriodTag,
  CsPlaceTag,
  CsItemTag,
  CsTitleTag];

@NgModule({
  imports: [
    CtLzmgMod,
    IconMod,
    CommonModule],
  declarations: [
    ...utils,
    ...cards,
    CardTag],
  entryComponents: [...cards],
  exports: [CardTag]
})
export class CardMod {}
