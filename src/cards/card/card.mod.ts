import { NgModule } from '@angular/core';

import { cards } from './all';
import { CardTag } from './card.tag';

@NgModule({
  declarations: [
    ...cards,
    CardTag],
  entryComponents: [...cards],
  exports: [CardTag]
})
export class CardMod {}
