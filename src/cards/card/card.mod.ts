import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { cards } from './all';
import { CardTag } from './card.tag';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ...cards,
    CardTag],
  entryComponents: [...cards],
  exports: [CardTag]
})
export class CardMod {}
