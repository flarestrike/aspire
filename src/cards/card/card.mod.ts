import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CtIconMod as IconMod } from '@chakray/tags';

import { cards } from './all';
import { CardTag } from './card.tag';

import { CsTitleTag } from './title/title.tag';
import { CsItemTag } from './item/item.tag';

const utils = [
  CsItemTag,
  CsTitleTag];

@NgModule({
  imports: [
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
