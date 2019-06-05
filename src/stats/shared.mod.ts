import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Label } from './label';
import { PlacesTag } from './places/places.tag';

const tags = [PlacesTag];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [...tags],
  providers: [Label],
  exports: [
    ...tags,
    CommonModule,
  ]
})
export class SharedMod {}
