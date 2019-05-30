import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CtPopMod, CtLzmgMod, CtIconMod as IconMod } from '@chakray/tags';

import { cards } from './all';
import { CardTag } from './card.tag';

import { CsTitleTag } from './title/title.tag';
import { CsItemTag } from './item/item.tag';
import { CsPlaceTag } from './place/place.tag';
import { CsPeriodTag } from './period/period.tag';
import { CsSampleTag } from './sample/sample.tag';
import { CsSamplePopTag } from './sample-pop/sample-pop.tag';

const utils = [
  CsSamplePopTag,
  CsSampleTag,
  CsPeriodTag,
  CsPlaceTag,
  CsItemTag,
  CsTitleTag];

@NgModule({
  imports: [
    CtPopMod,
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
