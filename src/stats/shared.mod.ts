import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CtLzmgMod } from '@chakray/tags';
import { Label } from './label';
import { PlacesTag } from './places/places.tag';

const tags = [PlacesTag];

@NgModule({
  imports: [
    CommonModule,
    CtLzmgMod,
  ],
  declarations: [...tags],
  providers: [Label],
  exports: [
    ...tags,
    CommonModule,
  ]
})
export class SharedMod {}
