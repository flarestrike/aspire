import { NgModule } from '@angular/core';

import { CtIconMod as IconMod, iconSet } from '@chakray/tags';
import { brand } from 'src/assets/fonts/brand';

@NgModule({
  imports: [
    IconMod,
  ],
  providers: [
    { provide: iconSet, useValue: brand, multi: true }
  ],
  exports: [
    IconMod,
  ]
})
export class SharedMod { }
